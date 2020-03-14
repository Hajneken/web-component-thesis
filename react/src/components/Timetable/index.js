import React from 'react';
import StyledTimetable from './styled'

const Timetable = () => {

    return(
            <StyledTimetable className="timetable">
                <h2>Ordinační hodiny</h2>
                <table className="timetable__week">
                    <tr>
                        <th>Pondělí</th>
                        <td rowSpan="5">9:00 - 11:30<br />15:00 - 17:30</td>
                    </tr>
                    <tr>
                        <th>Úterý</th>
                    </tr>
                    <tr>
                        <th>Středa</th>
                    </tr>
                    <tr>
                        <th>Čtvrtek</th>
                    </tr>
                </table>
                <table className="timetable__week">
                    <tr>
                        <th>Pátek</th>
                        <td>9:00 - 11:30</td>
                    </tr>
                </table>
                <table className="timetable__week">
                    <tr>
                        <th>Sobota</th>
                        <td rowSpan="2">Zavřeno</td>
                    </tr>
                    <tr>
                        <th>Neděle</th>
                    </tr>
                </table>
            </StyledTimetable>
    )
}

export default Timetable;