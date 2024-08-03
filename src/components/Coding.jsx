import LeetCodeCalendar from 'leetcode-calendar';
export default function Coding(){
    const Theme = {
        light: [
          'rgb(235, 235, 235)',
          'rgba(192, 132, 245, 0.44)',
          'rgba(192, 132, 245, 0.6)',
          'rgba(192, 132, 245, 0.76)',
          'rgba(192, 132, 245, 0.92)',
        ],
        dark: [
          'rgb(235, 235, 235)',
          'rgba(192, 132, 245, 0.44)',
          'rgba(192, 132, 245, 0.6)',
          'rgba(192, 132, 245, 0.76)',
          'rgba(192, 132, 245, 0.92)',
        ],
      }
      return (
        <div>
          <LeetCodeCalendar
            username='udaysurya'
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            theme={Theme}
            style={{ maxWidth: '1100px', margin: '0 auto' }}
          />
           <style jsx>{`.timeline .timeline-months .timeline-months-month {
          color: #FFD700 !important;
        }
        .timeline .timeline-body .timeline-weekdays .timeline-weekdays-weekday {
          color: #FFD700 !important;
        }`}
          </style>
        </div>
      )
}