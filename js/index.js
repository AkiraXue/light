document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, {
    passive: false
});
// 去掉ios alert的域名
window.alert = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
}

// 判断是否注册
let isregister = false;
let treeArray = [{left: '420',bottom: '134'}, {left: '188',bottom: '151'}, {left: '125',bottom: '26'}, {left: '179',bottom: '23'}, {left: '197',bottom: '128'},
    {left: '82',bottom: '207'}, {left: '211',bottom: '248'}, {left: '352',bottom: '276'}, {left: '658',bottom: '200'}, {left: '437',bottom: '44'},
    {left: '580',bottom: '23'}, {left: '451',bottom: '128'}, {left: '222',bottom: '273'}, {left: '82',bottom: '237'}, {left: '397',bottom: '246'},
    {left: '181',bottom: '185'}, {left: '110',bottom: '108'}, {left: '66',bottom: '58'}, {left: '68',bottom: '108'}, {left: '448',bottom: '112'},
    {left: '220',bottom: '228'}, {left: '6',bottom: '195'}, {left: '539',bottom: '106'}, {left: '372',bottom: '273'}, {left: '542',bottom: '242'},
    {left: '354',bottom: '121'}, {left: '547',bottom: '133'}, {left: '460',bottom: '95'}, {left: '579',bottom: '62'}, {left: '358',bottom: '251'},
    {left: '172',bottom: '169'}, {left: '302',bottom: '232'}, {left: '522',bottom: '127'}, {left: '371',bottom: '225'}, {left: '30',bottom: '205'},
    {left: '500',bottom: '110'}, {left: '486',bottom: '230'}, {left: '700',bottom: '211'}, {left: '450',bottom: '190'}, {left: '640',bottom: '88'},
    {left: '197',bottom: '230'}, {left: '102',bottom: '175'}, {left: '221',bottom: '56'}, {left: '341',bottom: '85'}, {left: '267',bottom: '124'},
    {left: '35',bottom: '243'}, {left: '171',bottom: '260'}, {left: '282',bottom: '151'}, {left: '141',bottom: '142'}, {left: '437',bottom: '195'},
    {left: '469',bottom: '216'}, {left: '122',bottom: '222'}, {left: '214',bottom: '105'}, {left: '100',bottom: '92'}, {left: '190',bottom: '108'},
    {left: '264',bottom: '227'}, {left: '448',bottom: '74'}, {left: '518',bottom: '146'}, {left: '514',bottom: '211'}, {left: '577',bottom: '139'},
    {left: '285',bottom: '181'}, {left: '221',bottom: '160'}, {left: '397',bottom: '90'}, {left: '417',bottom: '118'}, {left: '477',bottom: '142'},
    {left: '301',bottom: '280'}, {left: '364',bottom: '209'}, {left: '252',bottom: '258'}, {left: '371',bottom: '255'}, {left: '560',bottom: '200'},
    {left: '129',bottom: '63'}, {left: '255',bottom: '101'}, {left: '171',bottom: '148'}, {left: '130',bottom: '205'}, {left: '63',bottom: '187'},
    {left: '433',bottom: '69'}, {left: '497',bottom: '247'}, {left: '144',bottom: '272'}, {left: '376',bottom: '210'}, {left: '272',bottom: '146'},
    {left: '346',bottom: '158'}, {left: '602',bottom: '200'}, {left: '176',bottom: '110'}, {left: '115',bottom: '178'}, {left: '421',bottom: '178'},
    {left: '327',bottom: '180'}, {left: '408',bottom: '207'}, {left: '429',bottom: '117'}, {left: '476',bottom: '121'}, {left: '308',bottom: '175'},
    {left: '165',bottom: '62'}, {left: '139',bottom: '78'}, {left: '164',bottom: '101'}, {left: '190',bottom: '168'}, {left: '245',bottom: '69'},
    {left: '393',bottom: '190'}, {left: '244',bottom: '181'}, {left: '619',bottom: '178'}, {left: '438',bottom: '127'}, {left: '378',bottom: '248'},
    {left: '166',bottom: '43'}, {left: '154',bottom: '15'}, {left: '191',bottom: '82'}, {left: '147',bottom: '100'}, {left: '293',bottom: '146'},
    {left: '237',bottom: '126'}, {left: '460',bottom: '179'}, {left: '561',bottom: '51'}, {left: '621',bottom: '201'}, {left: '224',bottom: '145'},
    {left: '317',bottom: '216'}, {left: '334',bottom: '192'}, {left: '387',bottom: '107'}, {left: '420',bottom: '202'}, {left: '560',bottom: '134'},
    {left: '444',bottom: '298'}, {left: '435',bottom: '291'}, {left: '441',bottom: '274'}, {left: '460',bottom: '251'}, {left: '485',bottom: '253'},
    {left: '247',bottom: '44'}, {left: '235',bottom: '52'}, {left: '547',bottom: '170'}, {left: '500',bottom: '232'}, {left: '232',bottom: '232'},
    {left: '309',bottom: '135'}, {left: '336',bottom: '119'}, {left: '328',bottom: '133'}, {left: '369',bottom: '149'}, {left: '637',bottom: '188'},
    {left: '580',bottom: '4'}, {left: '536',bottom: '59'}, {left: '618',bottom: '70'}, {left: '621',bottom: '109'}, {left: '584',bottom: '160'},
    {left: '117',bottom: '13'}, {left: '106',bottom: '72'}, {left: '57',bottom: '114'}, {left: '50',bottom: '159'}, {left: '44',bottom: '229'},
    {left: '121',bottom: '141'}, {left: '144',bottom: '167'}, {left: '100',bottom: '113'}, {left: '346',bottom: '189'}, {left: '605',bottom: '183'},
    {left: '399',bottom: '301'}, {left: '378',bottom: '290'}, {left: '330',bottom: '285'}, {left: '402',bottom: '233'}, {left: '322',bottom: '116'},
    {left: '624',bottom: '244'}, {left: '644',bottom: '241'}, {left: '665',bottom: '236'}, {left: '645',bottom: '221'}, {left: '694',bottom: '199'},
    {left: '663',bottom: '182'}, {left: '665',bottom: '217'}, {left: '632',bottom: '171'}, {left: '651',bottom: '183'}, {left: '621',bottom: '129'},
    {left: '684',bottom: '215'}, {left: '676',bottom: '201'}, {left: '623',bottom: '157'}, {left: '606',bottom: '130'}, {left: '605',bottom: '66'},
    {left: '630',bottom: '79'}, {left: '581',bottom: '41'}, {left: '629',bottom: '97'}, {left: '612',bottom: '90'}, {left: '608',bottom: '151'},
    {left: '618',bottom: '224'}, {left: '637',bottom: '229'}, {left: '632',bottom: '203'}, {left: '584',bottom: '200'}, {left: '576',bottom: '170'},
    {left: '498',bottom: '149'}, {left: '483',bottom: '164'}, {left: '501',bottom: '213'}, {left: '489',bottom: '200'}, {left: '462',bottom: '163'},
    {left: '433',bottom: '28'}, {left: '422',bottom: '57'}, {left: '376',bottom: '86'}, {left: '363',bottom: '97'}, {left: '397',bottom: '155'},
    {left: '474',bottom: '97'}, {left: '463',bottom: '117'}, {left: '511',bottom: '106'}, {left: '521',bottom: '93'}, {left: '538',bottom: '78'},
    {left: '550',bottom: '61'}, {left: '569',bottom: '73'}, {left: '586',bottom: '133'}, {left: '564',bottom: '120'}, {left: '597',bottom: '80'},
    {left: '65',bottom: '160'}, {left: '87',bottom: '67'}, {left: '58',bottom: '98'}, {left: '82',bottom: '118'}, {left: '143',bottom: '51'},
    {left: '144',bottom: '25'}, {left: '152',bottom: '37'}, {left: '194',bottom: '57'}, {left: '177',bottom: '48'}, {left: '155',bottom: '85'},
    {left: '675',bottom: '224'}, {left: '591',bottom: '63'}, {left: '571',bottom: '48'}, {left: '128',bottom: '122'}, {left: '117',bottom: '120'},
    {left: '112',bottom: '87'}, {left: '127',bottom: '83'}, {left: '134',bottom: '38'}, {left: '187',bottom: '41'}, {left: '133',bottom: '18'},
    {left: '113',bottom: '35'}, {left: '59',bottom: '134'}, {left: '114',bottom: '252'}, {left: '97',bottom: '246'}, {left: '364',bottom: '236'},
    {left: '209',bottom: '224'}, {left: '151',bottom: '117'}, {left: '139',bottom: '121'}, {left: '387',bottom: '87'}, {left: '375',bottom: '308'},
    {left: '408',bottom: '295'}, {left: '279',bottom: '259'}, {left: '354',bottom: '202'}, {left: '655',bottom: '222'}, {left: '606',bottom: '108'},
    {left: '646',bottom: '200'}, {left: '634',bottom: '247'}, {left: '606',bottom: '218'}, {left: '594',bottom: '216'}, {left: '584',bottom: '221'},
    {left: '572',bottom: '204'}, {left: '526',bottom: '220'}, {left: '556',bottom: '237'}, {left: '571',bottom: '235'}, {left: '591',bottom: '173'},
    {left: '601',bottom: '164'}, {left: '552',bottom: '153'}, {left: '567',bottom: '149'}, {left: '594',bottom: '149'}, {left: '538',bottom: '158'},
    {left: '420',bottom: '260'}, {left: '427',bottom: '236'}, {left: '430',bottom: '267'}, {left: '440',bottom: '233'}, {left: '441',bottom: '255'},
    {left: '444',bottom: '210'}, {left: '455',bottom: '231'}, {left: '483',bottom: '183'}, {left: '595',bottom: '119'}, {left: '530',bottom: '143'},
    {left: '430',bottom: '215'}, {left: '462',bottom: '199'}, {left: '416',bottom: '223'}, {left: '408',bottom: '257'}, {left: '263',bottom: '256'},
    {left: '509',bottom: '240'}, {left: '41',bottom: '211'}, {left: '346',bottom: '253'}, {left: '335',bottom: '247'}, {left: '425',bottom: '284'},
    {left: '389',bottom: '207'}, {left: '529',bottom: '239'}, {left: '386',bottom: '306'}, {left: '498',bottom: '189'}, {left: '534',bottom: '125'},
    {left: '415',bottom: '278'}, {left: '384',bottom: '229'}, {left: '326',bottom: '267'}, {left: '494',bottom: '168'}, {left: '550',bottom: '112'},
    {left: '570',bottom: '188'}, {left: '240',bottom: '219'}, {left: '218',bottom: '207'}, {left: '234',bottom: '188'}, {left: '153',bottom: '62'},
    {left: '220',bottom: '181'}, {left: '258',bottom: '202'}, {left: '163',bottom: '245'}, {left: '329',bottom: '227'}, {left: '339',bottom: '270'},
    {left: '191',bottom: '202'}, {left: '167',bottom: '213'}, {left: '233',bottom: '165'}, {left: '211',bottom: '270'}, {left: '362',bottom: '277'},
    {left: '389',bottom: '172'}, {left: '314',bottom: '238'}, {left: '299',bottom: '189'}, {left: '388',bottom: '254'}, {left: '211',bottom: '193'},
    {left: '410',bottom: '145'}, {left: '390',bottom: '289'}, {left: '508',bottom: '141'}, {left: '472',bottom: '171'}, {left: '196',bottom: '188'},
    {left: '185',bottom: '229'}, {left: '212',bottom: '124'}, {left: '200',bottom: '102'}, {left: '362',bottom: '308'}, {left: '348',bottom: '103'},
    {left: '490',bottom: '119'}, {left: '343',bottom: '234'}, {left: '326',bottom: '207'}, {left: '386',bottom: '145'}, {left: '488',bottom: '100'},
    {left: '263',bottom: '160'}, {left: '318',bottom: '145'}, {left: '446',bottom: '147'}, {left: '293',bottom: '170'}, {left: '434',bottom: '144'},
    {left: '354',bottom: '224'}, {left: '199',bottom: '250'}, {left: '463',bottom: '138'}, {left: '577',bottom: '114'}, {left: '315',bottom: '276'},
    {left: '303',bottom: '153'}, {left: '255',bottom: '146'}, {left: '154',bottom: '226'}, {left: '355',bottom: '83'}, {left: '243',bottom: '92'},
    {left: '167',bottom: '191'}, {left: '202',bottom: '207'}, {left: '155',bottom: '204'}, {left: '142',bottom: '215'}, {left: '405',bottom: '183'},
    {left: '518',bottom: '231'}, {left: '134',bottom: '231'}, {left: '153',bottom: '255'}, {left: '529',bottom: '194'}, {left: '539',bottom: '203'},
    {left: '291',bottom: '259'}, {left: '271',bottom: '242'}, {left: '253',bottom: '238'}, {left: '403',bottom: '276'}, {left: '179',bottom: '210'},
    {left: '363',bottom: '188'}, {left: '340',bottom: '213'}, {left: '580',bottom: '96'}, {left: '454',bottom: '213'}, {left: '347',bottom: '305'},
    {left: '363',bottom: '163'}, {left: '564',bottom: '99'}, {left: '378',bottom: '165'}, {left: '122',bottom: '240'}, {left: '376',bottom: '192'},
    {left: '129',bottom: '264'}, {left: '441',bottom: '178'}, {left: '303',bottom: '256'}, {left: '411',bottom: '166'}, {left: '403',bottom: '128'},
    {left: '107',bottom: '236'}, {left: '251',bottom: '214'}, {left: '267',bottom: '181'}, {left: '314',bottom: '197'}, {left: '232',bottom: '208'},
    {left: '344',bottom: '137'}, {left: '275',bottom: '169'}, {left: '173',bottom: '238'}, {left: '182',bottom: '268'}, {left: '153',bottom: '181'},
    {left: '135',bottom: '185'}, {left: '158',bottom: '158'}, {left: '95',bottom: '224'}, {left: '107',bottom: '191'}, {left: '207',bottom: '175'},
    {left: '120',bottom: '163'}, {left: '110',bottom: '153'}, {left: '557',bottom: '76'}, {left: '446',bottom: '92'}, {left: '246',bottom: '111'},
    {left: '424',bottom: '82'}, {left: '561',bottom: '165'}, {left: '409',bottom: '98'}, {left: '71',bottom: '224'}, {left: '331',bottom: '100'},
    {left: '332',bottom: '156'}, {left: '94',bottom: '192'}, {left: '245',bottom: '163'}, {left: '205',bottom: '138'}, {left: '230',bottom: '100'},
    {left: '225',bottom: '122'}, {left: '160',bottom: '134'}, {left: '79',bottom: '187'}, {left: '431',bottom: '163'}, {left: '415',bottom: '74'},
    {left: '80',bottom: '164'}, {left: '96',bottom: '157'}, {left: '232',bottom: '78'}, {left: '203',bottom: '82'}, {left: '107',bottom: '132'},
    {left: '121',bottom: '102'}, {left: '60',bottom: '209'}, {left: '209',bottom: '61'}, {left: '92',bottom: '131'}, {left: '29',bottom: '226'},
    {left: '133',bottom: '104'}, {left: '57',bottom: '230'}, {left: '45',bottom: '185'}, {left: '174',bottom: '89'}, {left: '35',bottom: '170'},
    {left: '19',bottom: '185'}, {left: '117',bottom: '69'}, {left: '72',bottom: '126'}, {left: '62',bottom: '77'}, {left: '165.5',bottom: '25'},
    {left: '527',bottom: '109'}, {left: '137',bottom: '252'}, {left: '445',bottom: '56'}, {left: '584',bottom: '79'}, {left: '628',bottom: '220'},
    {left: '451',bottom: '286'}, {left: '452',bottom: '265'}, {left: '450',bottom: '247'}, {left: '131',bottom: '170'}, {left: '480',bottom: '210'},
    {left: '221',bottom: '253'}, {left: '655',bottom: '241'}, {left: '643',bottom: '169'}, {left: '182',bottom: '247'}, {left: '18',bottom: '205'},
    {left: '395',bottom: '267'}, {left: '400',bottom: '109'}, {left: '314',bottom: '257'}, {left: '280',bottom: '237'}, {left: '413',bottom: '241'},
    {left: '305',bottom: '208'}, {left: '566',bottom: '220'}, {left: '553',bottom: '219'}, {left: '539',bottom: '220'}, {left: '522',bottom: '162'},
    {left: '507',bottom: '161'}, {left: '242',bottom: '239'}, {left: '74',bottom: '80'}, {left: '294',bottom: '204'}, {left: '549',bottom: '192'},
    {left: '508',bottom: '122'}, {left: '77',bottom: '61'}, {left: '593',bottom: '192'}, {left: '583',bottom: '182'}, {left: '318',bottom: '167'},
    {left: '263',bottom: '138'}, {left: '212',bottom: '155'}, {left: '200',bottom: '156'}, {left: '384',bottom: '270'}, {left: '423',bottom: '97'},
    {left: '488',bottom: '142'}, {left: '450',bottom: '167'}, {left: '473',bottom: '192'}, {left: '531',bottom: '90'}, {left: '324',bottom: '249'},
    {left: '373',bottom: '107'}, {left: '284',bottom: '197'}, {left: '269',bottom: '199'}, {left: '273',bottom: '218'}, {left: '353',bottom: '173'},
    {left: '339',bottom: '172'}, {left: '246',bottom: '197'}, {left: '255',bottom: '173'}, {left: '368',bottom: '289'}, {left: '356',bottom: '292'},
    {left: '342',bottom: '285'}, {left: '112',bottom: '215'}, {left: '100',bottom: '207'}, {left: '145',bottom: '194'}, {left: '152',bottom: '145'},
    {left: '89',bottom: '170'}, {left: '70',bottom: '201'}, {left: '96',bottom: '73'}, {left: '83',bottom: '142'}, {left: '70',bottom: '141'},
    {left: '51',bottom: '198'}, {left: '421',bottom: '155'}, {left: '168',bottom: '122'}, {left: '56',bottom: '173'}, {left: '32',bottom: '190'},
    {left: '91',bottom: '109'}, {left: '398',bottom: '216'}, {left: '539',bottom: '183'}, {left: '559',bottom: '181'}, {left: '548',bottom: '91'},
    {left: '594',bottom: '98'}, {left: '436',bottom: '100'}, {left: '119',bottom: '197'}, {left: '161',bottom: '271'}, {left: '239',bottom: '147'},
    {left: '196',bottom: '270'}, {left: '253',bottom: '126'}, {left: '183',bottom: '128'}, {left: '146',bottom: '240'}, {left: '357',bottom: '144'},
    {left: '218',bottom: '78'}, {left: '336',bottom: '302'}, {left: '319',bottom: '293'}, {left: '179',bottom: '70'}, {left: '131',bottom: '151'}];    
console.log(treeArray.length);
let iconArray = ['./image/icon1.png', './image/icon2.png', './image/icon3.png', './image/icon4.png'];
let iconArray1 = ['./image/icon1_1.png', './image/icon2_1.png', './image/icon3_1.png', './image/icon4_1.png'];
let iconWH = [{w: '9',h: '18'}, {w: '9',h: '18'}, {w: '9',h: '12'}, {w: '9',h: '18'}];
let $icon = '';
let $iconLength = '';
let jssdk = new WechatJSSDK();
$.ajax({
    url: "https://fengtai-light.h5.yscase.com/api/index.php/front/is_oauth",
    type: "get",
    dataType: 'json',
    success: function (res) {
        if (res.code == 2001) {
            window.location.href = 'https://fengtai-light.h5.yscase.com';
        } else {
            $.ajax({
                url: "https://fengtai-light.h5.yscase.com/api/index.php/front/metadata",
                type: "get",
                dataType: 'json',
                success: function (res) {
                    console.log(res)
                    if (res.code == 200) {
                        setShare(res);
                    }
                }
            });
        }
    },
});

function setShare (res) {
    $iconLength = res.data.data.length;
    let num = parseInt(res.data.user.idx)+parseInt(1);
    if (res.data.user.is_register) {
        if (res.data.data.length >= 500) {
            console.log(1);
            jssdk.share({
                title: '点亮丰台，百年树人',
                desc: '小树已经全部点亮，快来看看吧。',
                link: 'https://fengtai-light.h5.yscase.com',
                imgUrl: 'http://fengtai-light.h5.yscase.com/image/fx.png',
                complete: function () {
                // 分享完做什么
                    $('#audio')[0].play();
                }
            });
        } else {
            console.log(2);
            jssdk.share({
                title: '点亮丰台，百年树人',
                desc: '我是第'+num+'位点亮小树的丰台新教师，快来和我一起点亮梦想！',
                link: 'https://fengtai-light.h5.yscase.com',
                imgUrl: 'http://fengtai-light.h5.yscase.com/image/fx.png',
                complete: function () {
                // 分享完做什么
                    $('#audio')[0].play();
                }
            });
        }
    } else {
        console.log(3);
        jssdk.share({
            title: '点亮丰台，百年树人',
            desc: '我正在参与点亮小树活动，快来和我一起点亮梦想！',
            link: 'https://fengtai-light.h5.yscase.com',
            imgUrl: 'http://fengtai-light.h5.yscase.com/image/fx.png',
            complete: function () {
            // 分享完做什么
                $('#audio')[0].play();
            }
        });
    }
}
$('.homepage_one .p7').on('click', function () {
    setPlantingTrees();
    $('.homepage_one').fadeOut(300);
    $('.homepage_two').fadeIn(300);
});
function setPlantingTrees() {
    $('.maptreebox').html('');
    $.ajax({
        url: "https://fengtai-light.h5.yscase.com/api/index.php/front/metadata",
        type: "get",
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                setShare(res);
                if (res.data.user.is_register) {
                    isregister = true
                    $('.homepage_two .p10').hide();
                    $('.homepage_two .p14').show();
                    $('.homepage_two .p9').hide();
                }
                let str = '';
                let w = '';
                let h = '';
                let icon = '';
                let iconnum = '';
                for (let i = 0; i < res.data.data.length; i++) {
                    w = res.data.data[i].icon_id == 0 ? iconWH[0].w : res.data.data[i].icon_id == 1 ? iconWH[1].w : res.data.data[i].icon_id == 2 ? iconWH[2].w : res.data.data[i].icon_id == 3 ? iconWH[3].w : '';
                    h = res.data.data[i].icon_id == 0 ? iconWH[0].h : res.data.data[i].icon_id == 1 ? iconWH[1].h : res.data.data[i].icon_id == 2 ? iconWH[2].h : res.data.data[i].icon_id == 3 ? iconWH[3].h : '';
                    icon = res.data.data[i].icon_id == 0 ? iconArray[0] : res.data.data[i].icon_id == 1 ? iconArray[1] : res.data.data[i].icon_id == 2 ? iconArray[2] : res.data.data[i].icon_id == 3 ? iconArray[3] : '';
                    iconnum = res.data.data[i].icon_id == 0 ? 0 : res.data.data[i].icon_id == 1 ? 1 : res.data.data[i].icon_id == 2 ? 2 : res.data.data[i].icon_id == 3 ? 3 : '';
                    str += `<div class='treeitem treeitem${i}' style='left:${treeArray[i].left-w/2}px;bottom:${treeArray[i].bottom}px;width:${w}px;height:${h}px'>
                    <img style='width:100%;height:100%;' data-id='${iconnum}' src='${icon}' class='iconimg ${res.data.user.idx === i?'icon':'icon1'}'></img>
                    <div class='treeitembox treeitembox2 ${iconnum === 2?'treeitembox1':''} ${res.data.user.idx === i?'show':'none'}'>
                    <img src='./image/p15.png?v=1'>
                    <p class='name'>真实姓名：${res.data.data[i].name}</p>
                    <p class='work'>工作单位：${res.data.data[i].work}</p>
                    <p class='flag'>入职Flag：${res.data.data[i].flag}</p>
                    </div>
                    </div>`;
                }
                $('.maptreebox').append(str);
                if (res.data.user.idx === false) {
                    // $icon = $('.treeitem');
                } else {
                    let num = res.data.user.idx + 1;
                    $('.num').html(num);
                    $('.tree img').attr('src',iconArray[iconnum]);
                    if (isregister) {
                        $('.tree').fadeIn(300);
                        $('.tips').fadeIn(300);
                    }
                    $icon = $('.treeitem' + res.data.user.idx);
                    $icon.find('.icon').on('webkitAnimationEnd',function(){
                        let iconimg = './' + $icon.find('img')[0].src.substr($icon.find('img')[0].src.length-15,15);
                        if (iconimg === iconArray[0]) {
                            $icon.find('.icon').attr('src',iconArray1[0]);
                        } else if (iconimg === iconArray[1]) {
                            $icon.find('.icon').attr('src',iconArray1[1]);
                        } else if (iconimg === iconArray[2]) {
                            $icon.find('.icon').attr('src',iconArray1[2]);
                        } else if (iconimg === iconArray[3]) {
                            $icon.find('.icon').attr('src',iconArray1[3]);
                        }
                    });
                }
                drag('.mapbox');
            }
        },
    });
}

$(document).on('click','.treeitem',function(){
    let id = $(this).find('.iconimg').data('id');
    $(this).find('.iconimg').attr('src',iconArray1[id]).removeClass('icon1').removeClass('icon2').removeClass('icon').addClass('icon3').parent().css('z-index','9');
    $(this).find('.treeitembox').removeClass('treeitembox2').addClass('treeitembox3');
    $(this).siblings().find('.iconimg').removeClass('icon').removeClass('icon1').removeClass('icon3').addClass('icon2').parent().css('z-index','1');
    for (let i = 0; i < $(this).siblings().find('.iconimg').length; i++) {
        $(this).siblings().find('.iconimg')[i].src = iconArray[$(this).siblings().find('.iconimg')[i].dataset.id];
    }
    $(this).find('.treeitembox').show();
    $(this).siblings().find('.treeitembox').hide();
});

$('.homepage_two .p10').on('click', function () {
    $('.homepage_two').fadeOut(300);
    $('.homepage_three').fadeIn(300);
});

$('.homepage_two .p11').on('click', function () {
    $('.share').fadeIn(300);
});

$('.share').on('click',function(){
    $('.share').fadeOut(300);
});

$('.homepage_three .p7').on('click', function () {
    let name = $('#name').val();
    let company = $('#company').val();
    let flag = $('#flag').val();
    if (name == '') {
        alert('请输入姓名');
        return;
    }
    if (company == '') {
        alert('请输入工作单位');
        return;
    }
    if (flag == '') {
        alert('请输入入职Flag');
        return;
    }
    $.ajax({
        url: "https://fengtai-light.h5.yscase.com/api/index.php/front/sava_info",
        type: "post",
        data: {
            name: name,
            work: company,
            flag: flag
        },
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                isregister = true;
                $('.homepage_two .p10').hide();
                $('.homepage_two .p14').show();
                $('.homepage_two .p9').hide();
                setPlantingTrees();
            }
            if (res.code == 201) {
                isregister = true;
                $('.homepage_two .p10').hide();
                $('.homepage_two .p14').show();
                $('.homepage_two .p9').hide();
                alert('小树已经被全部点亮，感谢您的参与。');
                $.ajax({
                    url: "https://fengtai-light.h5.yscase.com/api/index.php/front/metadata",
                    type: "get",
                    dataType: 'json',
                    success: function (res) {
                        if (res.code == 200) {
                            setShare(res);
                        }
                    }
                });
            }
            $('.homepage_three').fadeOut(300);
            $('.homepage_two').fadeIn(300);
        },
    });
});

$('.music').on('click',function(){
    var audio = $('#audio')[0];
    if(audio.paused){
        $('.music img:nth-child(2)').attr('src','./image/p19.png').addClass('musicicon');
        audio.play();
    }else{
        $('.music img:nth-child(2)').attr('src','./image/p20.png').removeClass('musicicon');
        audio.pause();
    }
});

let isangle = false;
function drag(drag) {
    var reqAnimationFrame = (function () {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var el = document.querySelector(drag);
    var START_X = 0;
    var START_Y = 0;

    var ticking = false;
    var transform; //图像效果
    var timer;
    var initAngle = 0; //旋转角度
    var initScale = 4; //放大倍数


    var mc = new Hammer.Manager(el); //用管理器 可以同时触发旋转 拖拽 移动
    /**
    ev.srcEvent.type touchstart touchend touchmove
    ev.deltaX 手势移动位移变量 
    */
    mc.add(new Hammer.Pan({
        threshold: 0,
        pointers: 0
    }));
    mc.add(new Hammer.Rotate({
        threshold: 0
    })).recognizeWith(mc.get('pan'));
    mc.add(new Hammer.Pinch({
        threshold: 0
    })).recognizeWith([mc.get('pan'), mc.get('rotate')]);
    //结束时做一些处理
    mc.on("hammer.input", function (ev) {
        if (ev.isFinal) {
            // console.log(START_X + " " + transform.translate.x + " " + ev.deltaX);
            START_X = transform.translate.x;
            START_Y = transform.translate.y;
        }
    });
    mc.on("panstart panmove", onPan);
    // mc.on("rotatestart rotatemove rotateend", onRotate);
    mc.on("pinchstart pinchmove", onPinch);
    /**
    第二次进入拖拽时 delta位移重置
    移动时 初始位置startxy不动。delta增加
    */
    function onPan(ev) {
        if (!ev.isFinal) {
            $(el).removeClass('animate');
            transform.translate = {
                x: START_X + ev.deltaX,
                y: START_Y + ev.deltaY
            };
            requestElementUpdate();
        }
    }

    function onPinch(ev) {
        if (ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }
        $(el).removeClass('animate');
        transform.scale = initScale * ev.scale;
        requestElementUpdate();
    }

    // //旋转相关
    // var preAngle = 0;
    // var tempAngleFlag = 0;
    // var deltaAngle = 0;
    // var startRotateAngle = 0;

    // function onRotate(ev) {
    //     console.log(el);
    //     //点下第二个触控点时触发
    //     if (ev.type == 'rotatestart') {
    //         startRotateAngle = ev.rotation;
    //         tempAngleFlag = 0;
    //     }
    //     if (ev.type == 'rotatemove') {
    //         if (tempAngleFlag == 0) {
    //             preAngle = startRotateAngle;
    //             tempAngleFlag++;
    //         } else {
    //             deltaAngle = ev.rotation - preAngle;
    //             $(el).removeClass('animate');
    //             transform.rz = 1; //非0 垂直xy轴
    //             transform.angle = initAngle + deltaAngle;
    //             requestElementUpdate();
    //         }
    //     }

    //     //旋转结束 记录当前图片角度 
    //     if (ev.type == 'rotateend') {
    //         initAngle = transform.angle;
    //     }
    // }

    $(drag).parent().next().on('click',function(event){
        if (isregister) {
            if ($iconLength >= 500) {
                return;
            }
            // transform.translate.x = $icon[0].offsetLeft;
            let id = $icon.find('.iconimg').data('id');
            $icon.find('.iconimg').attr('src',iconArray1[id]).removeClass('icon1').removeClass('icon2').removeClass('icon').addClass('icon3').parent().css('z-index','9');
            $icon.find('.treeitembox').removeClass('treeitembox2').addClass('treeitembox3');
            $icon.siblings().find('.iconimg').removeClass('icon').removeClass('icon1').removeClass('icon3').addClass('icon2').parent().css('z-index','1');
            for (let i = 0; i < $icon.siblings().find('.iconimg').length; i++) {
                $icon.siblings().find('.iconimg')[i].src = iconArray[$icon.siblings().find('.iconimg')[i].dataset.id];
            }
            $icon.find('.treeitembox').show();
            $icon.siblings().find('.treeitembox').hide();
            transform.translate.x = 0;
            transform.translate.y = 0;
            START_X = transform.translate.x;
            START_Y = transform.translate.y;
            transform.scale = 1;
            requestElementUpdate();
        }
    });
    $(drag).parent().siblings('.p16').on('click',function(event){
        if (isangle) {
            if (isregister) {
                $('.p9,.p10').hide();
            } else {
                $('.p9,.p10').show();
            }
            $('.p8,.p11,.p14').show();
            if ($iconLength >= 500) {
            } else {
                if (isregister) {
                    $('.tips').show();
                }
            }
            $(this).removeClass('p16rotate');
            transform.angle = 0;
            transform.scale = 1;
            transform.translate.x = 0;
            transform.translate.y = 0;
            requestElementUpdate();
            $(drag).css('pointer-events','none');
            setTimeout(function(){
                isangle = false;
                $(drag).css('pointer-events','auto');
            }, 300);
        } else {
            if (isregister) {
                $('.p9,.p10').hide();
            } else {
                $('.p9,.p10').hide();
            }
            $('.p8,.p11,.p14').hide();
            $('.tips').hide();
            $(this).addClass('p16rotate');
            transform.angle = 90;
            transform.scale = 2;
            transform.translate.x = 0;
            transform.translate.y = 0;
            requestElementUpdate();
            $(drag).css('pointer-events','none');
            setTimeout(function(){
                isangle = true;
                $(drag).css('pointer-events','auto');
            }, 300);
        }
        event.stopPropagation();
    });


    function updateElementTransform() {
        if (transform.scale <= 1) {
            transform.scale = 1
        }

        var value = [
            'translate(' + transform.translate.x + 'px, ' + transform.translate.y + 'px)',
            'scale(' + transform.scale + ', ' + transform.scale + ')',
            'rotate(' + transform.angle + 'deg)'
        ];

        $('.back').css('transform','scale('+transform.scale+')');

        value = value.join(" ");
        el.style.webkitTransform = value; /*为Chrome/Safari*/
        el.style.mozTransform = value; /*为Firefox*/
        el.style.transform = value; /*IE Opera?*/
        ticking = false;
    }

    function requestElementUpdate() {
        if (!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        }
    }

    /**
    初始化设置
    */
    function resetElement() {

        $(el).addClass('animate');
        transform = {
            translate: {
                x: START_X,
                y: START_Y
            },
            scale: 1,
            angle: 0,
            rx: 0,
            ry: 0,
            rz: 0
        };
        // transform.translate.x = -($(el)[0].offsetLeft + $icon[0].offsetLeft)
        requestElementUpdate();
    }

    resetElement();
}