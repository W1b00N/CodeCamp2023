let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
   };
   let { numPlanets, ...discoveryYears } = planetFacts;
   console.log(discoveryYears); // *
// ตอบ 
//    VM56:7 {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//  discoveryYears รับค่าทั้งหมดที่ไม่ได้ถูกระบุใน destructuring และถูกเก็บใน object ใหม่