"use client";

import React, {useEffect, useState} from "react";
import {formatNumberWithCommas} from "@/libs/utils";
import {DiscussionEmbed} from "disqus-react";

const salaryData = [
    { salary: '1,000만원', netSalary: 771033, totalDeduction: 62300, nationalPension: 32990, healthInsurance: 22870, longTermCare: 1680, employmentInsurance: 4760, incomeTax: 0, localIncomeTax: 0 },
    { salary: '1,100만원', netSalary: 847286, totalDeduction: 69380, nationalPension: 36740, healthInsurance: 25470, longTermCare: 1870, employmentInsurance: 5300, incomeTax: 0, localIncomeTax: 0 },
    { salary: '1,200만원', netSalary: 923500, totalDeduction: 76500, nationalPension: 40500, healthInsurance: 28080, longTermCare: 2070, employmentInsurance: 5850, incomeTax: 0, localIncomeTax: 0 },
    { salary: '1,300만원', netSalary: 998863, totalDeduction: 84470, nationalPension: 44240, healthInsurance: 30670, longTermCare: 2260, employmentInsurance: 6390, incomeTax: 830, localIncomeTax: 80 },
    { salary: '1,400만원', netSalary: 1073736, totalDeduction: 92930, nationalPension: 47990, healthInsurance: 33270, longTermCare: 2450, employmentInsurance: 6930, incomeTax: 2090, localIncomeTax: 200 },
    { salary: '1,500만원', netSalary: 1148580, totalDeduction: 101420, nationalPension: 51750, healthInsurance: 35880, longTermCare: 2640, employmentInsurance: 7470, incomeTax: 3350, localIncomeTax: 330 },
    { salary: '1,600만원', netSalary: 1223463, totalDeduction: 109870, nationalPension: 55490, healthInsurance: 38470, longTermCare: 2830, employmentInsurance: 8010, incomeTax: 4610, localIncomeTax: 460 },
    { salary: '1,700만원', netSalary: 1297826, totalDeduction: 118840, nationalPension: 59240, healthInsurance: 41070, longTermCare: 3030, employmentInsurance: 8550, incomeTax: 6320, localIncomeTax: 630 },
    { salary: '1,800만원', netSalary: 1372040, totalDeduction: 127960, nationalPension: 63000, healthInsurance: 43680, longTermCare: 3220, employmentInsurance: 9100, incomeTax: 8150, localIncomeTax: 810 },
    { salary: '1,900만원', netSalary: 1446313, totalDeduction: 137020, nationalPension: 66740, healthInsurance: 46270, longTermCare: 3410, employmentInsurance: 9640, incomeTax: 9970, localIncomeTax: 990 },
    { salary: '2,000만원', netSalary: 1520566, totalDeduction: 146100, nationalPension: 70490, healthInsurance: 48870, longTermCare: 3600, employmentInsurance: 10180, incomeTax: 11790, localIncomeTax: 1170 },
    { salary: '2,100만원', netSalary: 1594790, totalDeduction: 155210, nationalPension: 74250, healthInsurance: 51480, longTermCare: 3790, employmentInsurance: 10720, incomeTax: 13610, localIncomeTax: 1360 },
    { salary: '2,200만원', netSalary: 1669043, totalDeduction: 164290, nationalPension: 77990, healthInsurance: 54070, longTermCare: 3990, employmentInsurance: 11260, incomeTax: 15440, localIncomeTax: 1540 },
    { salary: '2,300만원', netSalary: 1743296, totalDeduction: 173370, nationalPension: 81740, healthInsurance: 56670, longTermCare: 4180, employmentInsurance: 11800, incomeTax: 17260, localIncomeTax: 1720 },
    { salary: '2,400만원', netSalary: 1817310, totalDeduction: 182690, nationalPension: 85500, healthInsurance: 59280, longTermCare: 4370, employmentInsurance: 12350, incomeTax: 19270, localIncomeTax: 1920 },
    { salary: '2,500만원', netSalary: 1890463, totalDeduction: 192870, nationalPension: 89240, healthInsurance: 61870, longTermCare: 4560, employmentInsurance: 12890, incomeTax: 22100, localIncomeTax: 2210 },
    { salary: '2,600만원', netSalary: 1963596, totalDeduction: 203070, nationalPension: 92990, healthInsurance: 64470, longTermCare: 4750, employmentInsurance: 13430, incomeTax: 24940, localIncomeTax: 2490 },
    { salary: '2,700만원', netSalary: 2036710, totalDeduction: 213290, nationalPension: 96750, healthInsurance: 67080, longTermCare: 4950, employmentInsurance: 13970, incomeTax: 27770, localIncomeTax: 2770 },
    { salary: '2,800만원', netSalary: 2109853, totalDeduction: 223480, nationalPension: 100490, healthInsurance: 69670, longTermCare: 5140, employmentInsurance: 14510, incomeTax: 30610, localIncomeTax: 3060 },
    { salary: '2,900만원', netSalary: 2179916, totalDeduction: 236750, nationalPension: 104240, healthInsurance: 72270, longTermCare: 5330, employmentInsurance: 15050, incomeTax: 36240, localIncomeTax: 3620 },
    { salary: '3,000만원', netSalary: 2248340, totalDeduction: 251660, nationalPension: 108000, healthInsurance: 74880, longTermCare: 5520, employmentInsurance: 15600, incomeTax: 43330, localIncomeTax: 4330 },
    { salary: '3,100만원', netSalary: 2316813, totalDeduction: 266520, nationalPension: 111740, healthInsurance: 77470, longTermCare: 5710, employmentInsurance: 16140, incomeTax: 50420, localIncomeTax: 5040 },
    { salary: '3,200만원', netSalary: 2384896, totalDeduction: 281770, nationalPension: 115490, healthInsurance: 80070, longTermCare: 5900, employmentInsurance: 16680, incomeTax: 57850, localIncomeTax: 5780 },
    { salary: '3,300만원', netSalary: 2451470, totalDeduction: 298530, nationalPension: 119250, healthInsurance: 82680, longTermCare: 6100, employmentInsurance: 17220, incomeTax: 66620, localIncomeTax: 6660 },
    { salary: '3,400만원', netSalary: 2515923, totalDeduction: 317410, nationalPension: 122990, healthInsurance: 85270, longTermCare: 6290, employmentInsurance: 17760, incomeTax: 77370, localIncomeTax: 7730 },
    { salary: '3,500만원', netSalary: 2580346, totalDeduction: 336320, nationalPension: 126740, healthInsurance: 87870, longTermCare: 6480, employmentInsurance: 18300, incomeTax: 88120, localIncomeTax: 8810 },
    { salary: '3,600만원', netSalary: 2656670, totalDeduction: 343330, nationalPension: 130500, healthInsurance: 90480, longTermCare: 6670, employmentInsurance: 18850, incomeTax: 88030, localIncomeTax: 8800 },
    { salary: '3,700만원', netSalary: 2723873, totalDeduction: 359460, nationalPension: 134240, healthInsurance: 93070, longTermCare: 6860, employmentInsurance: 19390, incomeTax: 96280, localIncomeTax: 9620 },
    { salary: '3,800만원', netSalary: 2788286, totalDeduction: 378380, nationalPension: 137990, healthInsurance: 95670, longTermCare: 7060, employmentInsurance: 19930, incomeTax: 107030, localIncomeTax: 10700 },
    { salary: '3,900만원', netSalary: 2852700, totalDeduction: 397300, nationalPension: 141750, healthInsurance: 98280, longTermCare: 7250, employmentInsurance: 20470, incomeTax: 117780, localIncomeTax: 11770 },
    { salary: '4,000만원', netSalary: 2917143, totalDeduction: 416190, nationalPension: 145490, healthInsurance: 100870, longTermCare: 7440, employmentInsurance: 21010, incomeTax: 128530, localIncomeTax: 12850 },
    { salary: '4,100만원', netSalary: 2981576, totalDeduction: 435090, nationalPension: 149240, healthInsurance: 103470, longTermCare: 7630, employmentInsurance: 21550, incomeTax: 139280, localIncomeTax: 13920 },
    { salary: '4,200만원', netSalary: 3045970, totalDeduction: 454030, nationalPension: 153000, healthInsurance: 106080, longTermCare: 7820, employmentInsurance: 22100, incomeTax: 150030, localIncomeTax: 15000 },
    { salary: '4,300만원', netSalary: 3110423, totalDeduction: 472910, nationalPension: 156740, healthInsurance: 108670, longTermCare: 8010, employmentInsurance: 22640, incomeTax: 160780, localIncomeTax: 16070 },
    { salary: '4,400만원', netSalary: 3174836, totalDeduction: 491830, nationalPension: 160490, healthInsurance: 111270, longTermCare: 8210, employmentInsurance: 23180, incomeTax: 171530, localIncomeTax: 17150 },
    { salary: '4,500만원', netSalary: 3239250, totalDeduction: 510750, nationalPension: 164250, healthInsurance: 113880, longTermCare: 8400, employmentInsurance: 23720, incomeTax: 182280, localIncomeTax: 18220 },
    { salary: '4,600만원', netSalary: 3303693, totalDeduction: 529640, nationalPension: 167990, healthInsurance: 116470, longTermCare: 8590, employmentInsurance: 24260, incomeTax: 193030, localIncomeTax: 19300 },
    { salary: '4,700만원', netSalary: 3362136, totalDeduction: 554530, nationalPension: 171740, healthInsurance: 119070, longTermCare: 8780, employmentInsurance: 24800, incomeTax: 209220, localIncomeTax: 20920 },
    { salary: '4,800만원', netSalary: 3425500, totalDeduction: 574500, nationalPension: 175500, healthInsurance: 121680, longTermCare: 8970, employmentInsurance: 25350, incomeTax: 220910, localIncomeTax: 22090 },
    { salary: '4,900만원', netSalary: 3488923, totalDeduction: 594410, nationalPension: 179240, healthInsurance: 124270, longTermCare: 9170, employmentInsurance: 25890, incomeTax: 232590, localIncomeTax: 23250 },
    { salary: '5,000만원', netSalary: 3552316, totalDeduction: 614350, nationalPension: 182990, healthInsurance: 126870, longTermCare: 9360, employmentInsurance: 26430, incomeTax: 244280, localIncomeTax: 24420 },
    { salary: '5,100만원', netSalary: 3615690, totalDeduction: 634310, nationalPension: 186750, healthInsurance: 129480, longTermCare: 9550, employmentInsurance: 26970, incomeTax: 255970, localIncomeTax: 25590 },
    { salary: '5,200만원', netSalary: 3679103, totalDeduction: 654230, nationalPension: 190490, healthInsurance: 132070, longTermCare: 9740, employmentInsurance: 27510, incomeTax: 267660, localIncomeTax: 26760 },
    { salary: '5,300만원', netSalary: 3742506, totalDeduction: 674160, nationalPension: 194240, healthInsurance: 134670, longTermCare: 9930, employmentInsurance: 28050, incomeTax: 279340, localIncomeTax: 27930 },
    { salary: '5,400만원', netSalary: 3805860, totalDeduction: 694140, nationalPension: 198000, healthInsurance: 137280, longTermCare: 10130, employmentInsurance: 28600, incomeTax: 291030, localIncomeTax: 29100 },
    { salary: '5,500만원', netSalary: 3869273, totalDeduction: 714060, nationalPension: 201740, healthInsurance: 139870, longTermCare: 10320, employmentInsurance: 29140, incomeTax: 302720, localIncomeTax: 30270 },
    { salary: '5,600만원', netSalary: 3932666, totalDeduction: 734000, nationalPension: 205490, healthInsurance: 142470, longTermCare: 10510, employmentInsurance: 29680, incomeTax: 314410, localIncomeTax: 31440 },
    { salary: '5,700만원', netSalary: 3993290, totalDeduction: 756710, nationalPension: 209250, healthInsurance: 145080, longTermCare: 10700, employmentInsurance: 30220, incomeTax: 328600, localIncomeTax: 32860 },
    { salary: '5,800만원', netSalary: 4056723, totalDeduction: 776610, nationalPension: 212990, healthInsurance: 147670, longTermCare: 10890, employmentInsurance: 30760, incomeTax: 340280, localIncomeTax: 34020 },
    { salary: '5,900만원', netSalary: 4120116, totalDeduction: 796550, nationalPension: 216740, healthInsurance: 150270, longTermCare: 11080, employmentInsurance: 31300, incomeTax: 351970, localIncomeTax: 35190 },
    { salary: '6,000만원', netSalary: 4183470, totalDeduction: 816530, nationalPension: 220500, healthInsurance: 152880, longTermCare: 11280, employmentInsurance: 31850, incomeTax: 363660, localIncomeTax: 36360 },
    { salary: '6,100만원', netSalary: 4246893, totalDeduction: 836440, nationalPension: 224240, healthInsurance: 155470, longTermCare: 11470, employmentInsurance: 32390, incomeTax: 375340, localIncomeTax: 37530 },
    { salary: '6,200만원', netSalary: 4310286, totalDeduction: 856380, nationalPension: 227990, healthInsurance: 158070, longTermCare: 11660, employmentInsurance: 32930, incomeTax: 387030, localIncomeTax: 38700 },
    { salary: '6,300만원', netSalary: 4373660, totalDeduction: 876340, nationalPension: 231750, healthInsurance: 160680, longTermCare: 11850, employmentInsurance: 33470, incomeTax: 398720, localIncomeTax: 39870 },
    { salary: '6,400만원', netSalary: 4437073, totalDeduction: 896260, nationalPension: 235490, healthInsurance: 163270, longTermCare: 12040, employmentInsurance: 34010, incomeTax: 410410, localIncomeTax: 41040 },
    { salary: '6,500만원', netSalary: 4500476, totalDeduction: 916190, nationalPension: 239240, healthInsurance: 165870, longTermCare: 12240, employmentInsurance: 34550, incomeTax: 422090, localIncomeTax: 42200 },
    { salary: '6,600만원', netSalary: 4562980, totalDeduction: 937020, nationalPension: 243000, healthInsurance: 168480, longTermCare: 12430, employmentInsurance: 35100, incomeTax: 434560, localIncomeTax: 43450 },
    { salary: '6,700만원', netSalary: 4618693, totalDeduction: 964640, nationalPension: 246740, healthInsurance: 171070, longTermCare: 12620, employmentInsurance: 35640, incomeTax: 453250, localIncomeTax: 45320 },
    { salary: '6,800만원', netSalary: 4674376, totalDeduction: 992290, nationalPension: 250490, healthInsurance: 173670, longTermCare: 12810, employmentInsurance: 36180, incomeTax: 471950, localIncomeTax: 47190 },
    { salary: '6,900만원', netSalary: 4730080, totalDeduction: 1019920, nationalPension: 254250, healthInsurance: 176280, longTermCare: 13000, employmentInsurance: 36720, incomeTax: 490610, localIncomeTax: 49060 },
    { salary: '7,000만원', netSalary: 4785823, totalDeduction: 1047510, nationalPension: 257990, healthInsurance: 178870, longTermCare: 13200, employmentInsurance: 37260, incomeTax: 509270, localIncomeTax: 50920 },
    { salary: '7,100만원', netSalary: 4841546, totalDeduction: 1075120, nationalPension: 261740, healthInsurance: 181470, longTermCare: 13390, employmentInsurance: 37800, incomeTax: 527930, localIncomeTax: 52790 },
    { salary: '7,200만원', netSalary: 4869760, totalDeduction: 1130240, nationalPension: 265500, healthInsurance: 184080, longTermCare: 13580, employmentInsurance: 38350, incomeTax: 571580, localIncomeTax: 57150 },
    { salary: '7,300만원', netSalary: 4925283, totalDeduction: 1158050, nationalPension: 269240, healthInsurance: 186670, longTermCare: 13770, employmentInsurance: 38890, incomeTax: 590440, localIncomeTax: 59040 },
    { salary: '7,400만원', netSalary: 4980786, totalDeduction: 1185880, nationalPension: 272990, healthInsurance: 189270, longTermCare: 13960, employmentInsurance: 39430, incomeTax: 609300, localIncomeTax: 60930 },
    { salary: '7,500만원', netSalary: 5036270, totalDeduction: 1213730, nationalPension: 276750, healthInsurance: 191880, longTermCare: 14160, employmentInsurance: 39970, incomeTax: 628160, localIncomeTax: 62810 },
    { salary: '7,600만원', netSalary: 5091793, totalDeduction: 1241540, nationalPension: 280490, healthInsurance: 194470, longTermCare: 14350, employmentInsurance: 40510, incomeTax: 647020, localIncomeTax: 64700 },
    { salary: '7,700만원', netSalary: 5147306, totalDeduction: 1269360, nationalPension: 284240, healthInsurance: 197070, longTermCare: 14540, employmentInsurance: 41050, incomeTax: 665880, localIncomeTax: 66580 },
    { salary: '7,800만원', netSalary: 5202780, totalDeduction: 1297220, nationalPension: 288000, healthInsurance: 199680, longTermCare: 14730, employmentInsurance: 41600, incomeTax: 684740, localIncomeTax: 68470 },
    { salary: '7,900만원', netSalary: 5258303, totalDeduction: 1325030, nationalPension: 291740, healthInsurance: 202270, longTermCare: 14920, employmentInsurance: 42140, incomeTax: 703600, localIncomeTax: 70360 },
    { salary: '8,000만원', netSalary: 5313816, totalDeduction: 1352850, nationalPension: 295490, healthInsurance: 204870, longTermCare: 15110, employmentInsurance: 42680, incomeTax: 722460, localIncomeTax: 72240 },
    { salary: '8,100만원', netSalary: 5369290, totalDeduction: 1380710, nationalPension: 299250, healthInsurance: 207480, longTermCare: 15310, employmentInsurance: 43220, incomeTax: 741320, localIncomeTax: 74130 },
    { salary: '8,200만원', netSalary: 5424823, totalDeduction: 1408510, nationalPension: 302990, healthInsurance: 210070, longTermCare: 15500, employmentInsurance: 43760, incomeTax: 760180, localIncomeTax: 76010 },
    { salary: '8,300만원', netSalary: 5480326, totalDeduction: 1436340, nationalPension: 306740, healthInsurance: 212670, longTermCare: 15690, employmentInsurance: 44300, incomeTax: 779040, localIncomeTax: 77900 },
    { salary: '8,400만원', netSalary: 5535820, totalDeduction: 1464180, nationalPension: 310500, healthInsurance: 215280, longTermCare: 15880, employmentInsurance: 44850, incomeTax: 797890, localIncomeTax: 79780 },
    { salary: '8,500만원', netSalary: 5591343, totalDeduction: 1491990, nationalPension: 314240, healthInsurance: 217870, longTermCare: 16070, employmentInsurance: 45390, incomeTax: 816750, localIncomeTax: 81670 },
    { salary: '8,600만원', netSalary: 5646836, totalDeduction: 1519830, nationalPension: 317990, healthInsurance: 220470, longTermCare: 16270, employmentInsurance: 45930, incomeTax: 835610, localIncomeTax: 83560 },
    { salary: '8,700만원', netSalary: 5702330, totalDeduction: 1547670, nationalPension: 321750, healthInsurance: 223080, longTermCare: 16460, employmentInsurance: 46470, incomeTax: 854470, localIncomeTax: 85440 },
    { salary: '8,800만원', netSalary: 5757853, totalDeduction: 1575480, nationalPension: 325490, healthInsurance: 225670, longTermCare: 16650, employmentInsurance: 47010, incomeTax: 873330, localIncomeTax: 87330 },
    { salary: '8,900만원', netSalary: 5813366, totalDeduction: 1603300, nationalPension: 329240, healthInsurance: 228270, longTermCare: 16840, employmentInsurance: 47550, incomeTax: 892190, localIncomeTax: 89210 },
    { salary: '9,000만원', netSalary: 5868840, totalDeduction: 1631160, nationalPension: 333000, healthInsurance: 230880, longTermCare: 17030, employmentInsurance: 48100, incomeTax: 911050, localIncomeTax: 91100 },
    { salary: '9,100만원', netSalary: 5924353, totalDeduction: 1658980, nationalPension: 336740, healthInsurance: 233470, longTermCare: 17230, employmentInsurance: 48640, incomeTax: 929910, localIncomeTax: 92990 },
    { salary: '9,200만원', netSalary: 5979866, totalDeduction: 1686800, nationalPension: 340490, healthInsurance: 236070, longTermCare: 17420, employmentInsurance: 49180, incomeTax: 948770, localIncomeTax: 94870 },
    { salary: '9,300만원', netSalary: 6035350, totalDeduction: 1714650, nationalPension: 344250, healthInsurance: 238680, longTermCare: 17610, employmentInsurance: 49720, incomeTax: 967630, localIncomeTax: 96760 },
    { salary: '9,400만원', netSalary: 6090883, totalDeduction: 1742450, nationalPension: 347990, healthInsurance: 241270, longTermCare: 17800, employmentInsurance: 50260, incomeTax: 986490, localIncomeTax: 98640 },
    { salary: '9,500만원', netSalary: 6146386, totalDeduction: 1770280, nationalPension: 351740, healthInsurance: 243870, longTermCare: 17990, employmentInsurance: 50800, incomeTax: 1005350, localIncomeTax: 100530 },
    { salary: '9,600만원', netSalary: 6201850, totalDeduction: 1798150, nationalPension: 355500, healthInsurance: 246480, longTermCare: 18190, employmentInsurance: 51350, incomeTax: 1024210, localIncomeTax: 102420 },
    { salary: '9,700만원', netSalary: 6257383, totalDeduction: 1825950, nationalPension: 359240, healthInsurance: 249070, longTermCare: 18380, employmentInsurance: 51890, incomeTax: 1043070, localIncomeTax: 104300 },
    { salary: '9,800만원', netSalary: 6312886, totalDeduction: 1853780, nationalPension: 362990, healthInsurance: 251670, longTermCare: 18570, employmentInsurance: 52430, incomeTax: 1061930, localIncomeTax: 106190 },
    { salary: '9,900만원', netSalary: 6368380, totalDeduction: 1881620, nationalPension: 366750, healthInsurance: 254280, longTermCare: 18760, employmentInsurance: 52970, incomeTax: 1080790, localIncomeTax: 108070 },
    { salary: '10,000만원', netSalary: 6423903, totalDeduction: 1909430, nationalPension: 370490, healthInsurance: 256870, longTermCare: 18950, employmentInsurance: 53510, incomeTax: 1099650, localIncomeTax: 109960 },
    { salary: '10,100만원', netSalary: 6479406, totalDeduction: 1937260, nationalPension: 374240, healthInsurance: 259470, longTermCare: 19140, employmentInsurance: 54050, incomeTax: 1118510, localIncomeTax: 111850 },
    { salary: '10,200만원', netSalary: 6534350, totalDeduction: 1965650, nationalPension: 378000, healthInsurance: 262080, longTermCare: 19340, employmentInsurance: 54600, incomeTax: 1137850, localIncomeTax: 113780 },
    { salary: '10,300만원', netSalary: 6589213, totalDeduction: 1994120, nationalPension: 381740, healthInsurance: 264670, longTermCare: 19530, employmentInsurance: 55140, incomeTax: 1157310, localIncomeTax: 115730 },
    { salary: '10,400만원', netSalary: 6644076, totalDeduction: 2022590, nationalPension: 385490, healthInsurance: 267270, longTermCare: 19720, employmentInsurance: 55680, incomeTax: 1176760, localIncomeTax: 117670 },
    { salary: '10,500만원', netSalary: 6698900, totalDeduction: 2051100, nationalPension: 389250, healthInsurance: 269880, longTermCare: 19910, employmentInsurance: 56220, incomeTax: 1196220, localIncomeTax: 119620 },
    { salary: '10,600만원', netSalary: 6753773, totalDeduction: 2079560, nationalPension: 392990, healthInsurance: 272470, longTermCare: 20100, employmentInsurance: 56760, incomeTax: 1215680, localIncomeTax: 121560 },
    { salary: '10,700만원', netSalary: 6808606, totalDeduction: 2108060, nationalPension: 396740, healthInsurance: 275070, longTermCare: 20300, employmentInsurance: 57300, incomeTax: 1235140, localIncomeTax: 123510 },
    { salary: '10,800만원', netSalary: 6863420, totalDeduction: 2136580, nationalPension: 400500, healthInsurance: 277680, longTermCare: 20490, employmentInsurance: 57850, incomeTax: 1254600, localIncomeTax: 125460 },
    { salary: '10,900만원', netSalary: 6918293, totalDeduction: 2165040, nationalPension: 404240, healthInsurance: 280270, longTermCare: 20680, employmentInsurance: 58390, incomeTax: 1274060, localIncomeTax: 127400 },
    { salary: '11,000만원', netSalary: 6968006, totalDeduction: 2198660, nationalPension: 407990, healthInsurance: 282870, longTermCare: 20870, employmentInsurance: 58930, incomeTax: 1298190, localIncomeTax: 129810 },
    { salary: '11,100만원', netSalary: 7013020, totalDeduction: 2236980, nationalPension: 411750, healthInsurance: 285480, longTermCare: 21060, employmentInsurance: 59470, incomeTax: 1326570, localIncomeTax: 132650 },
    { salary: '11,200만원', netSalary: 7058073, totalDeduction: 2275260, nationalPension: 415490, healthInsurance: 288070, longTermCare: 21250, employmentInsurance: 60010, incomeTax: 1354950, localIncomeTax: 135490 },
    { salary: '11,300만원', netSalary: 7103096, totalDeduction: 2313570, nationalPension: 419240, healthInsurance: 290670, longTermCare: 21450, employmentInsurance: 60550, incomeTax: 1383330, localIncomeTax: 138330 },
    { salary: '11,400만원', netSalary: 7148100, totalDeduction: 2351900, nationalPension: 423000, healthInsurance: 293280, longTermCare: 21640, employmentInsurance: 61100, incomeTax: 1411710, localIncomeTax: 141170 },
    { salary: '11,500만원', netSalary: 7193163, totalDeduction: 2390170, nationalPension: 426740, healthInsurance: 295870, longTermCare: 21830, employmentInsurance: 61640, incomeTax: 1440090, localIncomeTax: 144000 },
    { salary: '11,600만원', netSalary: 7238206, totalDeduction: 2428460, nationalPension: 430490, healthInsurance: 298470, longTermCare: 22020, employmentInsurance: 62180, incomeTax: 1468460, localIncomeTax: 146840 },
    { salary: '11,700만원', netSalary: 7283220, totalDeduction: 2466780, nationalPension: 434250, healthInsurance: 301080, longTermCare: 22210, employmentInsurance: 62720, incomeTax: 1496840, localIncomeTax: 149680 },
    { salary: '11,800만원', netSalary: 7328263, totalDeduction: 2505070, nationalPension: 437990, healthInsurance: 303670, longTermCare: 22410, employmentInsurance: 63260, incomeTax: 1525220, localIncomeTax: 152520 },
    { salary: '11,900만원', netSalary: 7373296, totalDeduction: 2543370, nationalPension: 441740, healthInsurance: 306270, longTermCare: 22600, employmentInsurance: 63800, incomeTax: 1553600, localIncomeTax: 155360 },
    { salary: '12,000만원', netSalary: 7418310, totalDeduction: 2581690, nationalPension: 445500, healthInsurance: 308880, longTermCare: 22790, employmentInsurance: 64350, incomeTax: 1581980, localIncomeTax: 158190 },
    { salary: '12,100만원', netSalary: 7463363, totalDeduction: 2619970, nationalPension: 449240, healthInsurance: 311470, longTermCare: 22980, employmentInsurance: 64890, incomeTax: 1610360, localIncomeTax: 161030 },
    { salary: '12,200만원', netSalary: 7389566, totalDeduction: 2777100, nationalPension: 452990, healthInsurance: 314070, longTermCare: 23170, employmentInsurance: 65430, incomeTax: 1746770, localIncomeTax: 174670 },
    { salary: '12,300만원', netSalary: 7434420, totalDeduction: 2815580, nationalPension: 456750, healthInsurance: 316680, longTermCare: 23370, employmentInsurance: 65970, incomeTax: 1775290, localIncomeTax: 177520 },
    { salary: '12,400만원', netSalary: 7479303, totalDeduction: 2854030, nationalPension: 460490, healthInsurance: 319270, longTermCare: 23560, employmentInsurance: 66510, incomeTax: 1803820, localIncomeTax: 180380 },
    { salary: '12,500만원', netSalary: 7524186, totalDeduction: 2892480, nationalPension: 464240, healthInsurance: 321870, longTermCare: 23750, employmentInsurance: 67050, incomeTax: 1832340, localIncomeTax: 183230 },
    { salary: '12,600만원', netSalary: 7569030, totalDeduction: 2930970, nationalPension: 468000, healthInsurance: 324480, longTermCare: 23940, employmentInsurance: 67600, incomeTax: 1860870, localIncomeTax: 186080 },
    { salary: '12,700만원', netSalary: 7613933, totalDeduction: 2969400, nationalPension: 471740, healthInsurance: 327070, longTermCare: 24130, employmentInsurance: 68140, incomeTax: 1889390, localIncomeTax: 188930 },
    { salary: '12,800만원', netSalary: 7658806, totalDeduction: 3007860, nationalPension: 475490, healthInsurance: 329670, longTermCare: 24320, employmentInsurance: 68680, incomeTax: 1917910, localIncomeTax: 191790 },
    { salary: '12,900만원', netSalary: 7703650, totalDeduction: 3046350, nationalPension: 479250, healthInsurance: 332280, longTermCare: 24520, employmentInsurance: 69220, incomeTax: 1946440, localIncomeTax: 194640 },
    { salary: '13,000만원', netSalary: 7748553, totalDeduction: 3084780, nationalPension: 482990, healthInsurance: 334870, longTermCare: 24710, employmentInsurance: 69760, incomeTax: 1974960, localIncomeTax: 197490 },
    { salary: '13,100만원', netSalary: 7793426, totalDeduction: 3123240, nationalPension: 486740, healthInsurance: 337470, longTermCare: 24900, employmentInsurance: 70300, incomeTax: 2003490, localIncomeTax: 200340 },
    { salary: '13,200만원', netSalary: 7838270, totalDeduction: 3161730, nationalPension: 490500, healthInsurance: 340080, longTermCare: 25090, employmentInsurance: 70850, incomeTax: 2032010, localIncomeTax: 203200 },
    { salary: '13,300만원', netSalary: 7883163, totalDeduction: 3200170, nationalPension: 494240, healthInsurance: 342670, longTermCare: 25280, employmentInsurance: 71390, incomeTax: 2060540, localIncomeTax: 206050 },
    { salary: '13,400만원', netSalary: 7928036, totalDeduction: 3238630, nationalPension: 497990, healthInsurance: 345270, longTermCare: 25480, employmentInsurance: 71930, incomeTax: 2089060, localIncomeTax: 208900 },
    { salary: '13,500만원', netSalary: 7972900, totalDeduction: 3277100, nationalPension: 501750, healthInsurance: 347880, longTermCare: 25670, employmentInsurance: 72470, incomeTax: 2117580, localIncomeTax: 211750 },
    { salary: '13,600만원', netSalary: 8017783, totalDeduction: 3315550, nationalPension: 505490, healthInsurance: 350470, longTermCare: 25860, employmentInsurance: 73010, incomeTax: 2146110, localIncomeTax: 214610 },
    { salary: '13,700만원', netSalary: 8062666, totalDeduction: 3354000, nationalPension: 509240, healthInsurance: 353070, longTermCare: 26050, employmentInsurance: 73550, incomeTax: 2174630, localIncomeTax: 217460 },
    { salary: '13,800만원', netSalary: 8107510, totalDeduction: 3392490, nationalPension: 513000, healthInsurance: 355680, longTermCare: 26240, employmentInsurance: 74100, incomeTax: 2203160, localIncomeTax: 220310 },
    { salary: '13,900만원', netSalary: 8152403, totalDeduction: 3430930, nationalPension: 516740, healthInsurance: 358270, longTermCare: 26440, employmentInsurance: 74640, incomeTax: 2231680, localIncomeTax: 223160 },
    { salary: '14,000만원', netSalary: 8197266, totalDeduction: 3469400, nationalPension: 520490, healthInsurance: 360870, longTermCare: 26630, employmentInsurance: 75180, incomeTax: 2260210, localIncomeTax: 226020 },
];

export default function LocationSalaryStat() {
    const [highlightedRow, setHighlightedRow] = useState(new Array()); // Track highlighted row index

    useEffect(() => {
    const firstMillionRow = new Array();
    for (let i = 1; i < 9; i++) {
        firstMillionRow.push(salaryData.findIndex((item : any) => parseInt(item.netSalary, 10) >= (i + 1) * 1000000));
    }
    setHighlightedRow(firstMillionRow);
}, []);

    return (
        <div className="min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">2024년 연봉실수령액</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            연봉
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            실수령액
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            공제액계
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            국민연금
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            건강보험
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            장기요양
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            고용보험
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            소득세
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            지방소득세
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {salaryData.map((item, index) => (
                        <tr key={index} className={highlightedRow.includes(index) ? "bg-red-200" : ""}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.netSalary)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.totalDeduction)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.nationalPension)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.healthInsurance)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.longTermCare)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.employmentInsurance)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.incomeTax)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{formatNumberWithCommas(item.localIncomeTax)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <hr className="mt-1 mb-8" />
            <DiscussionEmbed
                key="IndustrySalaryStat"
                shortname='insight-jov'
                config={
                    {
                        url: "http://localhost:3000/salary/receive",
                        identifier: "receive",
                        title: "연봉실수령액표.",
                        language: 'ko',
                    }
                }
            />
        </div>
    );
}