import { log } from "console"
import { Assistance } from "../../entities/Assistance"
import { assistanceRepository } from "../../app/repositories"
import ConflictError from "../../errors/ConflictError"
import { IntegerType } from "typeorm"

const storeAssistance = async (dateCheck: string, timein: string, timeout: string, user_id: number) => {
	log('Starting service store assistance... ')
	
	let assistance = await assistanceRepository.findOneBy({ dateCheck, user_id })
	log(' - assistance', assistance)

	if(!assistance) {
		const newAssistance: Assistance = new Assistance()
		assistance = newAssistance
		assistance.dateCheck = dateCheck
		assistance.user_id = user_id
		let result = await assistanceRepository.save(assistance)
		log( ' - result:', result )
	}

	if(timein != ''){
		assistance.timein = timein
	}

	if(timeout != ''){
		assistance.timeout = timeout
	}
	
	let result = await assistanceRepository.update(assistance.id, assistance)

	log( ' - result:', result )
	log( ' - assistance:', assistance )

	return assistance
}

export default storeAssistance