import { useState } from 'react'
import Navbar from './Nav'
import { Nav } from 'react-bootstrap'
import "./planner.css"
const Meals = [
  {
    mealNumber: '01',
    day: 'Monday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '02',
    day: 'Tuesday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '05',
    day: 'Wednesday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '03',
    day: 'Thursday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '04',
    day: 'Friday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '05',
    day: 'Saturday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
  {
    mealNumber: '05',
    day: 'Sunday',
    b: '',
    l: '',
    s: '',
    d: '',
  },
]
const MealPlanner = () => {
  const [Meal, setMeal] = useState(Meals)
    const onChangeInput = (e, mealNumber) => {
    const { name, value } = e.target
    const editMeal = Meal.map((item) =>
        item.mealNumber === mealNumber && name ? { ...item, [name]: value } : item
    )
    setMeal(editMeal)
  }
  return (
      <div >
        <Navbar/>
        <div className='planner'>
        <h1>Meal Planning Page</h1>
        <h3>Use this page to plan meals for one week at a time.</h3>
        <table>
          <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snack</th>
            <th>Dinner</th>
          </tr>
          </thead>
          <tbody>
          {Meal.map(({ mealNumber,day,  b, l, s, d }) => (
              <tr key={mealNumber}>
                <td>
                  <input
                      name="day"
                      value={day}
                      type="text"
                      onChange={(e) => onChangeInput(e, mealNumber)}
                      placeholder=" Enter Day of Meal"
                  />
                </td>
                <td>
                  <input
                      name="b"
                      value={b}
                      type="text"
                      onChange={(e) => onChangeInput(e, mealNumber)}
                      placeholder=" Enter Breakfast"
                  />
                </td>
                <td>
                  <input
                      name="l"
                      value={l}
                      type="text"
                      onChange={(e) => onChangeInput(e, mealNumber)}
                      placeholder="Enter Lunch"
                  />
                </td>
                <td>
                  <input
                      name="s"
                      type="text"
                      value={s}
                      onChange={(e) => onChangeInput(e, mealNumber)}
                      placeholder="Enter Snack"
                  />
                </td>
                <td>
                  <input
                      name="d"
                      type="text"
                      value={d}
                      onChange={(e) => onChangeInput(e, mealNumber)}
                      placeholder="Enter Dinner"
                  />
                </td>
              </tr>
          ))}
          </tbody>
        </table>
        <div>
          <button>Save</button>
        </div>
      </div>
      </div>

  )}
export default MealPlanner