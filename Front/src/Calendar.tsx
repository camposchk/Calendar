import style from './Calendar.module.css'
import Month from './components/Month'
import Grid from './components/Grid'

function Calendar() {

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className={style["wrap-left"]}>
            <div>
                <Month />
            </div>
            <h1>Eventos</h1>
            <h2>09/05</h2>
            <div className={style["events"]}></div>
        </div>
        <div className={style["wrap-right"]}>
            <h1>maio 2024</h1>
            <div className={style["grid"]}>
                <Grid />
            </div>
        </div>
    </div>
  )
}

export default Calendar