import { log } from "console"
import { User } from "../../entities/User"
import { userRepository } from "../../app/repositories"
import ConflictError from "../../errors/ConflictError"

const storeUser = async (name: string, surname: string, email: string, language: string) => {
  log('Starting service store user... ')

  const userMail = await userRepository.findOneBy({ email })
  log(' - user', userMail)
  if(userMail) {
    throw new ConflictError('Duplicate entry ' + email)
  }
  
  const user: User = new User()

  user.name = name
  user.surname = surname
  user.email = email
  user.language = language

  const result = await userRepository.save(user)
  log( ' - result:', result )
  log( ' - user:', user )

  return user
}

export default storeUser