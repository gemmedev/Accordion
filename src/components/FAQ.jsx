import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg'>
      <Accordion title='Do you prefer Android or IOS?' answer='I like to use IOS products because of their excellent user interface '/>
      <Accordion title='What do you like to do in your free time?' answer='Watch movies and go to eat at different restaurants'/>
      <Accordion title='what is your favorite food?' answer='Hamburgers, pizzas, french fries... i mean... everything'/>
    </div>
  )
}

export default FAQ;