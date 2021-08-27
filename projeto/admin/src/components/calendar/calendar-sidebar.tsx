import { ChangeEventHandler } from "react"

interface CalendarSidebarProps {
    weekendVisible: boolean,
    weekendVisibleOnChange: ChangeEventHandler<HTMLInputElement>,
}

const CalendarSidebar = (props: CalendarSidebarProps) => {
    const { weekendVisible, weekendVisibleOnChange } = props;
    return (
        <div className='demo-app-sidebar'>
            <div className='demo-app-sidebar-section'>
                <h2>Instructions</h2>
                <ul>
                    <li>Select dates and you will be prompted to create a new event</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>
            <div className='demo-app-sidebar-section'>
                <label>
                    <input
                        type='checkbox'
                        checked={weekendVisible}
                        onChange={weekendVisibleOnChange}
                    ></input>
                    toggle weekends
                </label>
            </div>
        </div>
    )
}

export default CalendarSidebar;