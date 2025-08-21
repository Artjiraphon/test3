export const mkEvent = (name='New Event', patch={}) => ({
  id: 'ev'+Math.random().toString(36).slice(2,7),
  name,
  open: true,
  theme: { primary:'#3b82f6', secondary:'#10b981', compact:false, passTemplate:'corporate' },
  sessions: [{ id:'d1-am', day:'Day 1', session:'AM' }],
  participants: [],
  prizes: [{ id:'aw'+Date.now(), title:'Prize', qty:1 }],
  winners: [],
  ...patch,
})

export const seedEvents = [
  mkEvent('Outing – Pattaya (AUG)', {
    theme:{ primary:'#3b82f6', secondary:'#10b981', compact:false, passTemplate:'gradient' },
    sessions:[{id:'d1-am', day:'Day 1', session:'AM'},{id:'d2-gala', day:'Day 2', session:'Gala'}],
    participants:[
      { id:'p1', name:'คุณเก่ง ทีมแกร่ง', phone:'0800000001', emp:'123456', team:'BLUE', bus:'BUS 1', room:'1001', table:'19', shirt_size:'L', meal_type:'ปกติ', allergy_notes:'', flight_no:'-', parking_plate:'1กก-1234', checked:false, day:'Day 1', session:'AM', photo_url:'' },
      { id:'p2', name:'คุณฟ้า พาเพลิน', phone:'0800000002', emp:'222222', team:'RED', bus:'BUS 2', room:'802', table:'05', shirt_size:'M', meal_type:'มังสวิรัติ', allergy_notes:'', flight_no:'-', parking_plate:'', checked:true, day:'Day 2', session:'Gala', photo_url:'' },
    ],
    prizes:[{ id:'aw1', title:'ของที่ระลึก', qty:3 }],
  }),
  mkEvent('Team Building – Hua Hin (SEP)', {
    sessions:[{id:'d1-all', day:'Day 1', session:'All'},{id:'d2-am', day:'Day 2', session:'AM'}],
    participants:[
      { id:'h1', name:'คุณโอม โอเวอร์', phone:'0800000004', emp:'444444', team:'BLUE', bus:'BUS 1', room:'712', table:'12', shirt_size:'L', meal_type:'ปกติ', allergy_notes:'', flight_no:'-', parking_plate:'2ขค-5678', checked:false, day:'Day 1', session:'All', photo_url:'' },
      { id:'h2', name:'คุณมิ้นท์ มินิมอล', phone:'0800000005', emp:'555555', team:'RED', bus:'BUS 3', room:'803', table:'04', shirt_size:'M', meal_type:'ปกติ', allergy_notes:'', flight_no:'-', parking_plate:'', checked:false, day:'Day 2', session:'AM', photo_url:'' },
    ],
    prizes:[{ id:'aw2', title:'Gift Voucher', qty:2 }],
  }),
]
