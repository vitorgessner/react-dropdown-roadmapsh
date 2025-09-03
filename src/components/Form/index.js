import './Form.css'

export default function Form({handleSubmit, handleChange, value}) {
    return (
        <form onSubmit={handleSubmit}>
          <input className='input' onChange={handleChange} value={value} />
          <button className="button">Adicionar</button>
        </form>
    )
}