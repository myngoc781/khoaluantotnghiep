// import React, { useState, useEffect } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import firebase from 'firebase/app';
// import 'firebase/database';

// const localizer = momentLocalizer(moment);
// const MyCalendar = () => {
//     const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Lấy dữ liệu lịch từ Firebase Realtime Database
//     const ref = firebase.database().ref('events');
//     ref.on('value', (snapshot) => {
//       const eventData = snapshot.val();
//       const eventList = [];
//       for (let id in eventData) {
//         eventList.push({
//           id,
//           title: eventData[id].title,
//           start: new Date(eventData[id].start),
//           end: new Date(eventData[id].end),
//         });
//       }
//       setEvents(eventList);
//     });
//   }, []);

//   return (
//     <div className="App">
//     <Calendar
//       localizer={localizer}
//       events={events}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
//   )
// }

// export default MyCalendar

 
