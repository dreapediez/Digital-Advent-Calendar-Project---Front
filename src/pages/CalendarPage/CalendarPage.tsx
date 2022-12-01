import CalendarDay from "../../components/Days/CalendarDay";
import CalendarPageStyled from "./CalendarPageStyled";

const CalendarPage = (): JSX.Element => {
  const calendarDays: number[] = [];

  for (let i = 0; i <= 24; i++) {
    calendarDays.push(i);
  }

  return (
    <CalendarPageStyled>
      <h2>Let’s open today’s window!</h2>
      <div className="days">
        {calendarDays.map((day) => (
          <CalendarDay calendarDay={day} />
        ))}
      </div>
    </CalendarPageStyled>
  );
};

export default CalendarPage;
