
export default function formatSalaryToMillionWon(salary : number) : string {
    // 연봉을 10000으로 나누어 "만원" 단위로 변환합니다.
    const millionWon = Math.floor(salary / 10000);
    // 변환된 값을 문자열로 변환하여 "만원"을 붙입니다.
    const formattedSalary = millionWon.toString() + "만원";
    return formattedSalary;
}


export function formatNumberWithCommas(number : number) : string {
    return number.toLocaleString();
}

export const locationLogoSrc = [
    { name: '서울특별시', logo: '/서울특별시.png'},
    { name: '경기도', logo: 'https://i.namu.wiki/i/-azxXL85alXPbFD414d8mxfLsyr5gc5NGj3gbVOWLCXD_0HwzwCPvUJwsdOTNbomTVbsUjSpNTorKr6-dkmm4Q.svg'},
    { name: '울산광역시', logo: 'https://i.namu.wiki/i/JzN3TFx3Q1daKrO2sK0F5ZhomDc3Xc_DjIOuNdz5LvEp8wpn50UgAdxIXRQlYYEMAB4TTexGBwJXjRe6_VyUiQ.svg'},
    { name: '부산광역시', logo: '/부산광역시.png'},
    { name: '강원도', logo: '/강원도.png'},
    { name: '경상남도', logo: 'https://i.namu.wiki/i/vg6QNmQ5SqCZluJkG0jiTibKqlrbGMVdijw-ts80zx90o3HLiTiXTTqCTB4CJUyvtGI343zzK3cU6eMrUyBOMg.svg'},
    { name: '경상북도', logo: 'https://i.namu.wiki/i/OCFF29ot1Due3hSBHX3ozicGUs-7RCoxLoTOIGlDDpo98kFLasdjWsil65P0jASQs8KOaXHk0MXCMXod_i_P0w.svg'},
    { name: '충청남도', logo: 'https://i.namu.wiki/i/NmdGLbvm2p5mv5KvKEA_R-PUD4Ts5q5KLVdjqZVaYDU7_yFt0ihtT_5dVIPAXthNxcynMAGiMpF30iJldEoj7w.svg'},
    { name: '인천광역시', logo: 'https://i.namu.wiki/i/3-cVWCOkubfAudzMOjVXO_eS8pYu4sx3PlW8jV-kdSbi6ikrkZFfZTwI7oc0jQgOLEf75p2cWHC3g__LvIXbxQ.svg'},
    { name: '전라남도', logo: 'https://i.namu.wiki/i/D4yPLU922vUfJN21JbmLvYlEZQk3as7MFiPdpL_1qYe1E1YjJfcGM5mVTnAtMl2uYNYJ8BRz3pZHXiEE7kYCzA.svg'},
    { name: '충청북도', logo: 'https://i.namu.wiki/i/AVRXT9O71goo2t8xzw3N-dLwiSTkpzQRMZtq1eKxjAel3x41zud8oGhsatB0uy7FH4UPIH6bZi6uuXGrV43WJQ.svg'},
    { name: '대구광역시', logo: 'https://i.namu.wiki/i/_JSYeSmDDh-Uzg3o2o12A0Ig5xhmqWrYFyCQ-8F2jzl8nRGmTp1NMFWxGDisBwTZf8TNlxKePnIQnFGw5_j56w.svg'},
    { name: '대전광역시', logo: 'https://i.namu.wiki/i/lzbS2IjnPgBynSTCnvWpEmCoFzj1tb1xzlaeI-5peMK5QD6q0lXakB3rrpeEQInJJ4UHbOoRPwxgEvpp7OrSOA.svg'},
    { name: '전북특별자치도', logo: '/전북특별자치도.png'},
    { name: '강원특별자치도', logo: '/강원특별자치도.png'},
    { name: '광주광역시', logo: 'https://i.namu.wiki/i/aWFdkoaJQegB71DJukdGvGZa2Ieu3Ct-k3zormF7yjNIC7j9KUQY58loIqlnK5a0jMktLcH5TI23Ni5Nbisvpg.svg'},
    { name: '제주특별자치도', logo: 'https://i.namu.wiki/i/_Uu8Zv36rJ08Ybras2nh3fz8Sn6jJfJt8npRaAFhi46N-IuzHurx--JjCmFVbFg9_5wH-zTb3ioXu-ytLRxaUg.svg'},
    { name: '세종특별자치시', logo: '/세종특별자치시.png'},
    { name: '전라북도', logo: '/전라북도.jpg'},
];