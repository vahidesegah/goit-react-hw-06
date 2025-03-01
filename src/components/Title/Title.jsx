import Lottie from 'lottie-react'
import PhoneBook from '../../assets/animation/phonebook.json'
import css from './Title.module.css'

function Title (){
    return ( 
        <section className={css.section}>
            <div className={css.container}>
                <Lottie animationData={PhoneBook} loop={true} className={css.animation}/>
                <h1 className={css.title} >
                Phone Book
                </h1>
            </div>
        </section>
    )
}
export default Title;