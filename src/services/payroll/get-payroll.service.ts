import { log } from "console"
import { Between } from "typeorm";
const { DateTime } = require("luxon");
import { userRepository, assistanceRepository } from "../../app/repositories"
import NotFoundError from "../../errors/NotFoundError"

interface Payroll {
	id:number
	name: string
	surname: string
	days: Array<any>,
	totalPay: number
}

const getPayroll = async (id: number, date_init: string, date_end: string, fee: number) => {
	log(' Starting service get payroll... ')

	const user = await userRepository.findOneBy({ id })
	if(!user) {
		throw new NotFoundError('User not found')
	}

	const assistances = await assistanceRepository.find({
		relations: {
			user: false,
		},
    where: {
      dateCheck: Between(date_init, date_end),
			user_id: id
    },
  })

	log(' - assistances: ', assistances)

	let totalHours = 0
	let totalPay = 0
	let daysDetails : Array<any> = []
	assistances.forEach((item, index)=>{
		if(item.timein != '' && item.timeout != ''){
			
			let inicio = DateTime.fromFormat(item.timein, "HH:mm:ss")
			let fin = DateTime.fromFormat(item.timeout, "HH:mm:ss")
	
			// Si la hora de fin es menor, significa que es del día siguiente
			if (fin < inicio) {
				fin = fin.plus({ days: 1 })
			}
	
			let totalHourDay = (fin.diff(inicio, "hours").hours).toFixed(2)
			log(' - totalHourDay: ', totalHourDay)

			let totalPayDay = 0
			let totalExtraHour = 0
			let totalNormalHours = 8

			if(totalHourDay > 8){
				// Tarifa normal
				totalPayDay += 8 * fee
				// Tarifa extra
				totalExtraHour = (totalHourDay - 8)
				totalPayDay += totalExtraHour * (fee * 1.5)
			}else{
				totalNormalHours = totalHourDay
				// Tarifa normal
				totalPayDay += totalHourDay * fee
			}
			
			daysDetails.push({
				date_check: item.dateCheck,
				timein: item.timein,
				timeout: item.timeout,
				totaHour: totalHourDay,
				totalNormalHours: totalNormalHours,
				totalExtraHour: totalExtraHour.toFixed(2),
				totalPay: totalPayDay
			})

			totalHours += totalHourDay
			totalPay += totalPayDay
		}
	})

	log(' - totalHours: ', totalHours)
	log(' - totalPay: ', totalPay)

	const { name, surname } = user
	const payrollData: Payroll = {
		id,
		name,
		surname,
		days:daysDetails,
		totalPay:totalPay
	}
	return payrollData
}

export default getPayroll