import { log } from "console"
import { userRepository } from "../../app/repositories"
import NotFoundError from "../../errors/NotFoundError"

const updateUser = async (id: number, name: string, surname: string, email: string, language: string) => {
  log('Starting service update user... ')

  const user = await userRepository.findOneBy({ id })
  log(' - user', user)
  if(!user) {
    throw new NotFoundError('User not found')
  }

  const userDuplicate = await userRepository.findOneBy({ name, surname })
  log(' - userDuplicate', userDuplicate)
  if(userDuplicate && userDuplicate.id != user.id) {
    throw new NotFoundError('The name and surname exist in the database')
  }

  user.name = name
  user.surname = surname
  user.email = email
  user.language = language

  const result = await userRepository.update(id, user)
  log( ' - result:', result )
  log( ' - user:', user )
}

export default updateUser