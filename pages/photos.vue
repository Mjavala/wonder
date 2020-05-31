<template>
  <div id="photo-wrap">
    <Nav v-if="clicked" id="navigation-photos" />
    <loader v-if="!loaded" />
    <div v-show="loaded">
      <svg
        v-if="!clicked"
        id="hamburgers"
        xmlns="http://www.w3.org/2000/svg"
        width="36.167"
        height="24.922"
        viewBox="0 0 36.167 24.922"
        @click="clicked = true"
      ><g transform="translate(-4037.605 -701)"><rect width="36.167" height="5.167" transform="translate(4037.605 701)" fill="red" /><rect width="36.167" height="5.167" transform="translate(4037.605 710.877)" fill="red" /><rect width="36.167" height="5.167" transform="translate(4037.605 720.755)" fill="red" /></g></svg>
      <div id="photography">
        <svg class="photography-svg" xmlns="http://www.w3.org/2000/svg" width="37.836" height="217.174" viewBox="0 0 37.836 217.174"><g transform="translate(-2455.107 -1366)"><path d="M2459.509,1366.345a3,3,0,0,1,1.207-.287,3.1,3.1,0,0,1,1.188.2,3.315,3.315,0,0,1,1.035.634,3.087,3.087,0,0,1,.749,1.013,3.168,3.168,0,0,1,.3,1.244,3.455,3.455,0,0,1-.17,1.217,3.088,3.088,0,0,1-.6,1.056,2.922,2.922,0,0,1-.992.745l-3.269,1.524,1.117,2.394-1.149.521-3.822-8.194Zm-1.047,6.274,3.119-1.469a1.887,1.887,0,0,0,.643-.481,2.123,2.123,0,0,0,.4-.67,2.077,2.077,0,0,0-.555-2.214,2.016,2.016,0,0,0-.667-.407,2.153,2.153,0,0,0-.769-.128,1.924,1.924,0,0,0-.782.184l-3.125,1.458Z" fill="red" /><path d="M2455.151,1391.041l1.108-.516,2.153,4.68.048-.022a4.291,4.291,0,0,1-.1-1.163,3.077,3.077,0,0,1,.253-1.083,3.167,3.167,0,0,1,.64-.936,3.515,3.515,0,0,1,1.044-.719,3.426,3.426,0,0,1,1.112-.308,2.74,2.74,0,0,1,1.131.118,2.874,2.874,0,0,1,1.033.6,3.466,3.466,0,0,1,.815,1.143l1.522,3.234-1.119.523-1.4-3a2.635,2.635,0,0,0-.525-.756,2.234,2.234,0,0,0-1.67-.664,2.586,2.586,0,0,0-1.048.264,2.616,2.616,0,0,0-1,.765,2.728,2.728,0,0,0-.48.956,2.757,2.757,0,0,0-.087.962,2.354,2.354,0,0,0,.182.763l1.338,2.9-1.1.511Z" fill="red" /><path d="M2457.767,1418.952a3.147,3.147,0,0,1-.305-1.323,3.451,3.451,0,0,1,.241-1.3,3.69,3.69,0,0,1,.722-1.142,3.772,3.772,0,0,1,2.538-1.182,3.68,3.68,0,0,1,1.338.18,3.433,3.433,0,0,1,1.152.652,3.261,3.261,0,0,1,1.122,2.406,3.439,3.439,0,0,1-.241,1.3,3.684,3.684,0,0,1-.722,1.142,3.769,3.769,0,0,1-2.537,1.183,3.683,3.683,0,0,1-1.339-.181,3.434,3.434,0,0,1-1.152-.651A3.154,3.154,0,0,1,2457.767,1418.952Zm.834-.389a1.837,1.837,0,0,0,.551.686,2.414,2.414,0,0,0,.83.41,2.955,2.955,0,0,0,.982.1,2.738,2.738,0,0,0,1.015-.263,2.7,2.7,0,0,0,.843-.6,2.812,2.812,0,0,0,.543-.811,2.5,2.5,0,0,0,.206-.894,1.837,1.837,0,0,0-.722-1.548,2.413,2.413,0,0,0-.815-.411,2.752,2.752,0,0,0-.964-.094,2.949,2.949,0,0,0-1.858.867,2.906,2.906,0,0,0-.56.805,2.322,2.322,0,0,0-.222.893A1.84,1.84,0,0,0,2458.6,1418.563Z" fill="red" /><path d="M2457.894,1438.091l.417-.194-.844-1.811,1.072-.5.844,1.81,1.143-.532.345.738-1.144.533q.273.584.551,1.165c.185.387.369.776.55,1.164a3.051,3.051,0,0,0,.652.979,1.352,1.352,0,0,0,.7.354,1.577,1.577,0,0,0,.749-.073,7.39,7.39,0,0,0,.787-.317l.467,1-.607.283a3.107,3.107,0,0,1-1.055.289,2.38,2.38,0,0,1-1.014-.129,2.544,2.544,0,0,1-.911-.583,3.556,3.556,0,0,1-.736-1.078q-.3-.643-.6-1.277c-.2-.423-.4-.849-.6-1.278l-.418.195Z" fill="red" /><path d="M2457.767,1464.4a3.146,3.146,0,0,1-.305-1.323,3.447,3.447,0,0,1,.241-1.3,3.691,3.691,0,0,1,.722-1.142,3.767,3.767,0,0,1,2.538-1.183,3.7,3.7,0,0,1,1.338.181,3.433,3.433,0,0,1,1.152.652,3.261,3.261,0,0,1,1.122,2.406,3.439,3.439,0,0,1-.241,1.3,3.685,3.685,0,0,1-.722,1.142,3.769,3.769,0,0,1-2.537,1.183,3.7,3.7,0,0,1-1.339-.181,3.436,3.436,0,0,1-1.152-.652A3.149,3.149,0,0,1,2457.767,1464.4Zm.834-.389a1.837,1.837,0,0,0,.551.686,2.414,2.414,0,0,0,.83.41,2.955,2.955,0,0,0,.982.1,2.855,2.855,0,0,0,1.858-.866,2.811,2.811,0,0,0,.543-.811,2.5,2.5,0,0,0,.206-.894,1.838,1.838,0,0,0-.722-1.548,2.4,2.4,0,0,0-.815-.411,2.758,2.758,0,0,0-.964-.094,2.935,2.935,0,0,0-1.858.867,2.914,2.914,0,0,0-.56.8,2.322,2.322,0,0,0-.222.894A1.839,1.839,0,0,0,2458.6,1464.007Z" fill="red" /><path d="M2457.667,1486.888a2.922,2.922,0,0,1-.278-1.218,3.094,3.094,0,0,1,.236-1.22,3.523,3.523,0,0,1,.721-1.083,3.814,3.814,0,0,1,1.157-.815,3.876,3.876,0,0,1,1.35-.368,3.341,3.341,0,0,1,1.267.134,1,1,0,0,1,.066-.6,1.251,1.251,0,0,1,.677-.57l.333.715a.977.977,0,0,0-.521.373.725.725,0,0,0-.114.286,2.713,2.713,0,0,1,.843.563,2.982,2.982,0,0,1,.881,2.077,3.008,3.008,0,0,1-.242,1.207,3.567,3.567,0,0,1-.717,1.074,4.012,4.012,0,0,1-2.318,1.154,3.378,3.378,0,0,1-1.134-.052l.567,1.215,5.175-2.428.944,2.025-5.615,3.445-.453-.847,5.542-3.324-.206-.44-5.235,2.455-1.011-2.167a2.908,2.908,0,0,1-1.137-.573A2.844,2.844,0,0,1,2457.667,1486.888Zm.861-.393a1.5,1.5,0,0,0,.508.606,2.042,2.042,0,0,0,.762.329,2.718,2.718,0,0,0,.914.032,3.182,3.182,0,0,0,.963-.282,3,3,0,0,0,.811-.546,2.659,2.659,0,0,0,.546-.712,2.016,2.016,0,0,0,.226-.789,1.556,1.556,0,0,0-.145-.777,1.523,1.523,0,0,0-.5-.6,2.1,2.1,0,0,0-.753-.34,2.576,2.576,0,0,0-.9-.046,3.013,3.013,0,0,0-.94.271,3.224,3.224,0,0,0-.835.556,2.658,2.658,0,0,0-.56.727,2.129,2.129,0,0,0-.235.8A1.484,1.484,0,0,0,2458.528,1486.495Z" fill="red" /><path d="M2457.554,1506.43l1.108-.517,1.047,2.339.048-.022a4.359,4.359,0,0,1-.07-1.207,3.39,3.39,0,0,1,.3-1.156,3.129,3.129,0,0,1,.736-.989,3.677,3.677,0,0,1,1.225-.716l.538,1.155a3.369,3.369,0,0,0-1.437.62,3.138,3.138,0,0,0-.844.973,2.622,2.622,0,0,0-.314,1.068,1.868,1.868,0,0,0,.14.906l1.332,2.917-1.072.5Z" fill="red" /><path d="M2464.318,1533.146l-1.329-3.006-.035.017a7.459,7.459,0,0,1,.053,1.389,5.307,5.307,0,0,1-.233,1.3,3.471,3.471,0,0,1-.559,1.086,2.462,2.462,0,0,1-.925.737,2.147,2.147,0,0,1-1.587.1,2.032,2.032,0,0,1-.669-.377,1.739,1.739,0,0,1-.465-.61,1.592,1.592,0,0,1-.146-1.012,2.4,2.4,0,0,1,.419-.935,4.756,4.756,0,0,1,.794-.849q.472-.4.973-.773t.966-.711a5.99,5.99,0,0,0,.768-.655l-.306-.656-4.371,2.039-.433-.929,5.348-2.494,2.738,5.872Zm-4.694.1a.933.933,0,0,0,.595.514,1.178,1.178,0,0,0,.872-.081,2.313,2.313,0,0,0,.78-.588,3.426,3.426,0,0,0,.541-.869,4.936,4.936,0,0,0,.321-1.056,6.929,6.929,0,0,0,.119-1.164l-.122-.263a7.156,7.156,0,0,1-.631.534c-.247.188-.5.376-.762.565s-.515.383-.762.58a4.546,4.546,0,0,0-.63.6,1.849,1.849,0,0,0-.363.611A.807.807,0,0,0,2459.624,1533.246Z" fill="red" /><path d="M2456.3,1552.473l1.071-.5,1,2.144.036-.017a3.61,3.61,0,0,1-.067-1.2,3.331,3.331,0,0,1,.3-1.044,2.885,2.885,0,0,1,.614-.845,3.278,3.278,0,0,1,.886-.6,3.593,3.593,0,0,1,1.164-.319,2.966,2.966,0,0,1,1.214.131,3.209,3.209,0,0,1,1.123.65,3.712,3.712,0,0,1,.892,1.245,3.948,3.948,0,0,1,.4,1.5,3.043,3.043,0,0,1-.2,1.267,2.89,2.89,0,0,1-.658,1,3.462,3.462,0,0,1-.969.676,3.75,3.75,0,0,1-1.061.321,2.889,2.889,0,0,1-1.054-.038,3,3,0,0,1-.994-.421,3.751,3.751,0,0,1-.892-.823l-.036.016,2.412,5.111-1.083.505Zm2.449,2.36a2.161,2.161,0,0,0,.483.647,2.541,2.541,0,0,0,.777.5,2.594,2.594,0,0,0,1.01.19,2.787,2.787,0,0,0,1.179-.287,3.011,3.011,0,0,0,.94-.657,2.374,2.374,0,0,0,.513-.828,2.291,2.291,0,0,0,.127-.91,2.491,2.491,0,0,0-.229-.9,2.576,2.576,0,0,0-.531-.749,2.23,2.23,0,0,0-.784-.5,2.406,2.406,0,0,0-.993-.14,3.143,3.143,0,0,0-1.164.317,2.566,2.566,0,0,0-.936.7,2.607,2.607,0,0,0-.483.894,2.49,2.49,0,0,0-.1.928A2.305,2.305,0,0,0,2458.747,1554.833Z" fill="red" /><path d="M2461.578,1582.245l.846-.4-.077-2.341-1.036.483-5.192-4.728,1.12-.523,5.04,4.654.048-.022-.265-6.881,1.108-.516.438,10.454-1.6.744Z" fill="red" /><rect width="0.885" height="217.161" transform="translate(2492.058 1366)" fill="red" /></g></svg>
      </div>
      <div v-if="mobile" id="photo-wrap-mobile">
        <div v-for="item in itemsFiltered" :key="item.id" class="photo-container">
          <img class="image" :src="item">
        </div>
      </div>
      <div v-if="!mobile" id="photo-wrap-web">
        <div id="col-1" />
        <div id="col-2" />
        <div id="col-3" />
        <div id="col-4" />
      </div>
      <div id="more-ig">
        <svg id="more-ig-svg" xmlns="http://www.w3.org/2000/svg" width="260" height="24.957" viewBox="0 0 260 24.957"><g transform="translate(-8559.606 -2284.102)"><path d="M8816.3,2284.1h-18.374c-2.2,0-3.319,1.148-3.319,3.347v18.336a2.926,2.926,0,0,0,3.2,3.274H8816.3a2.97,2.97,0,0,0,3.307-3.309v-18.385A2.953,2.953,0,0,0,8816.3,2284.1Zm-2.021,2.812c2.481,0,2.481,0,2.481,2.481,0,2.417,0,2.417-2.433,2.417-2.457,0-2.457,0-2.457-2.452S8811.87,2286.914,8814.278,2286.914Zm-7.166,4.814a4.838,4.838,0,1,1-4.855,4.793A4.895,4.895,0,0,1,8807.112,2291.728Zm9.647,13c-.025,1.17-.326,1.495-1.483,1.495H8798.94c-1.146,0-1.472-.325-1.472-1.495,0-2.992,0-6.056-.042-9.1,0-.86.23-1.051,1.041-1.016,1.146.072,1.156.029,1.029,1.139a7.686,7.686,0,0,0,6.022,8.35,7.66,7.66,0,0,0,9.1-8.941c-.076-.43.019-.519.41-.519,1.726-.134,1.726-.164,1.726,1.624Z" fill="red" fill-rule="evenodd" /><path d="M8564.908,2290.979l3.185,9.781,3.166-9.781h3.308l2.065,12.038h-1.664l-2.063-11.9h-.07l-3.937,11.9h-1.61l-3.954-11.9h-.069l-1.978,11.9h-1.68l2.048-12.038Z" fill="red" /><path d="M8579.168,2297.05a6,6,0,0,1,.481-2.4,6.136,6.136,0,0,1,1.328-1.959,6.3,6.3,0,0,1,2.022-1.33,6.948,6.948,0,0,1,5.126,0,6.39,6.39,0,0,1,2.03,1.33,5.972,5.972,0,0,1,1.33,1.959,6.113,6.113,0,0,1,.472,2.4,5.979,5.979,0,0,1-1.8,4.322,6.273,6.273,0,0,1-2.03,1.321,6.69,6.69,0,0,1-2.572.481,6.514,6.514,0,0,1-2.526-.481,6.265,6.265,0,0,1-2.021-1.321,6.192,6.192,0,0,1-1.348-1.95A5.809,5.809,0,0,1,8579.168,2297.05Zm1.5,0a4.082,4.082,0,0,0,.376,1.716,4.7,4.7,0,0,0,1.032,1.451,5.05,5.05,0,0,0,1.549,1.007,5.112,5.112,0,0,0,3.849,0,5.038,5.038,0,0,0,1.549-1.007,4.586,4.586,0,0,0,1.024-1.451,4.179,4.179,0,0,0,.366-1.716,4.265,4.265,0,0,0-.366-1.74,4.578,4.578,0,0,0-1.024-1.462,4.917,4.917,0,0,0-1.549-1,5.213,5.213,0,0,0-3.849,0,4.928,4.928,0,0,0-1.549,1,4.7,4.7,0,0,0-1.032,1.462A4.166,4.166,0,0,0,8580.673,2297.05Z" fill="red" /><path d="M8600.864,2290.962a4.065,4.065,0,0,1,1.628.332,4.156,4.156,0,0,1,1.329.9,4.309,4.309,0,0,1,.892,1.339,4.171,4.171,0,0,1,.1,3.017,4.493,4.493,0,0,1-.647,1.2,4.121,4.121,0,0,1-.98.927,4.407,4.407,0,0,1-1.215.578l3.411,3.761h-2.256l-3.075-3.5h-3.959v3.516l-1.68-.017v-12.038Zm-4.776,6.981h4.573a2.6,2.6,0,0,0,1.056-.218,2.666,2.666,0,0,0,.864-.6,2.913,2.913,0,0,0,.576-.884,2.775,2.775,0,0,0,.21-1.077,2.619,2.619,0,0,0-.21-1.032,2.744,2.744,0,0,0-.576-.857,2.791,2.791,0,0,0-.864-.586,2.589,2.589,0,0,0-1.056-.219l-4.573.017Z" fill="red" /><path d="M8607.583,2291h10.708v1.627h-9.116v3.464h8.941v1.5h-8.941v3.815h9.116v1.61h-10.708Z" fill="red" /><path d="M8624.694,2297.05a6.017,6.017,0,0,1,.481-2.4,6.126,6.126,0,0,1,1.33-1.959,6.291,6.291,0,0,1,2.021-1.33,6.953,6.953,0,0,1,5.128,0,6.387,6.387,0,0,1,2.027,1.33,5.928,5.928,0,0,1,1.33,1.959,6.1,6.1,0,0,1,.473,2.4,5.985,5.985,0,0,1-1.8,4.322,6.271,6.271,0,0,1-2.027,1.321,6.7,6.7,0,0,1-2.572.481,6.532,6.532,0,0,1-2.529-.481,6.293,6.293,0,0,1-2.021-1.321,6.21,6.21,0,0,1-1.349-1.95A5.824,5.824,0,0,1,8624.694,2297.05Zm1.5,0a4.1,4.1,0,0,0,.376,1.716,4.7,4.7,0,0,0,1.032,1.451,5.05,5.05,0,0,0,1.549,1.007,5.112,5.112,0,0,0,3.849,0,5.05,5.05,0,0,0,1.549-1.007,4.586,4.586,0,0,0,1.024-1.451,4.166,4.166,0,0,0,.368-1.716,4.251,4.251,0,0,0-.368-1.74,4.578,4.578,0,0,0-1.024-1.462,4.928,4.928,0,0,0-1.549-1,5.213,5.213,0,0,0-3.849,0,4.928,4.928,0,0,0-1.549,1,4.7,4.7,0,0,0-1.032,1.462A4.181,4.181,0,0,0,8626.2,2297.05Z" fill="red" /><path d="M8641.7,2291.137l-.088,11.88h-1.68l.018-12.038h3.535l7.487,11.845.018-11.845h1.75l-.088,12.038h-3.477Z" fill="red" /><path d="M8660.877,2303.017h-1.626l.017-12.125h1.662Z" fill="red" /><path d="M8665.2,2291.137l-.087,11.88h-1.68l.018-12.038h3.534l7.488,11.845.018-11.845h1.75l-.088,12.038h-3.478Z" fill="red" /><path d="M8689.678,2294.846a3.346,3.346,0,0,0-1.435-1.794,5.684,5.684,0,0,0-2.922-.656,12.206,12.206,0,0,0-1.619.106,6.213,6.213,0,0,0-1.417.343,2.941,2.941,0,0,0-1.006.607,1.251,1.251,0,0,0-.4.9,1.065,1.065,0,0,0,.341.861,2.442,2.442,0,0,0,.962.519,7.368,7.368,0,0,0,1.382.264q.779.078,1.619.1,1.33.036,2.536.14a8.168,8.168,0,0,1,2.109.437,3.192,3.192,0,0,1,1.426.989,2.714,2.714,0,0,1,.507,1.794,3.555,3.555,0,0,1-.411,1.583,3.071,3.071,0,0,1-1.172,1.163,6.416,6.416,0,0,1-2.038.718,15.761,15.761,0,0,1-2.993.245,10.66,10.66,0,0,1-2.938-.346,5.811,5.811,0,0,1-1.951-.937,4.293,4.293,0,0,1-1.172-1.351,6.367,6.367,0,0,1-.6-1.583l1.629-.473a4.622,4.622,0,0,0,.4,1.112,3.01,3.01,0,0,0,.85,1,4.544,4.544,0,0,0,1.486.727,8.113,8.113,0,0,0,2.319.279,15.806,15.806,0,0,0,2.2-.131,5.668,5.668,0,0,0,1.5-.4,2.061,2.061,0,0,0,.857-.642,1.536,1.536,0,0,0,.288-.869,1.312,1.312,0,0,0-.3-.958,2.215,2.215,0,0,0-.858-.571,4.779,4.779,0,0,0-1.232-.29c-.467-.053-.952-.085-1.453-.1l-1.486-.036a16.365,16.365,0,0,1-2-.157,6.44,6.44,0,0,1-1.793-.5,3.367,3.367,0,0,1-1.278-.979,2.38,2.38,0,0,1-.472-1.566,2.59,2.59,0,0,1,.463-1.531,3.62,3.62,0,0,1,1.295-1.093,7.092,7.092,0,0,1,1.968-.656,13.184,13.184,0,0,1,2.485-.219,7.946,7.946,0,0,1,3.858.857,4.811,4.811,0,0,1,2.231,2.624Z" fill="red" /><path d="M8703.8,2291.014v1.505h-4.775v10.5h-1.681v-10.5h-4.917v-1.505Z" fill="red" /><path d="M8713.3,2298.905h-6.37l-1.731,4.129h-1.715l4.95-12.055h3.378l4.97,12.055h-1.75Zm-5.774-1.575h5.2l-2.555-6.141h-.088Z" fill="red" /><path d="M8728.747,2295.65a4.55,4.55,0,0,0-1.775-2.335,5.374,5.374,0,0,0-3.105-.866,5.921,5.921,0,0,0-1.8.279,4.428,4.428,0,0,0-1.54.849,4.236,4.236,0,0,0-1.067,1.409,4.44,4.44,0,0,0-.4,1.942,4.3,4.3,0,0,0,.463,2.047,4.367,4.367,0,0,0,1.226,1.453,5.187,5.187,0,0,0,1.731.856,7.123,7.123,0,0,0,1.986.281,7.294,7.294,0,0,0,2.126-.281,6.877,6.877,0,0,0,1.592-.69,5.492,5.492,0,0,0,1.095-.849,4.621,4.621,0,0,0,.611-.753v-.262h-5.512v-1.575h5.687v3.727q-.315.3-.8.7a6.684,6.684,0,0,1-1.189.762,8.192,8.192,0,0,1-1.627.6,7.976,7.976,0,0,1-2.135.227,8.635,8.635,0,0,1-2.546-.419,6.858,6.858,0,0,1-2.228-1.19,5.756,5.756,0,0,1-2.156-4.672,6.031,6.031,0,0,1,.563-2.686,5.643,5.643,0,0,1,1.479-1.9,6.276,6.276,0,0,1,2.1-1.129,7.908,7.908,0,0,1,4.462-.1,6.818,6.818,0,0,1,1.863.814,6.038,6.038,0,0,1,1.5,1.355,5.931,5.931,0,0,1,1,1.916Z" fill="red" /><path d="M8739.246,2290.962a4.053,4.053,0,0,1,1.627.332,4.16,4.16,0,0,1,1.33.9,4.326,4.326,0,0,1,.892,1.339,4.184,4.184,0,0,1,.1,3.017,4.493,4.493,0,0,1-.647,1.2,4.117,4.117,0,0,1-.979.927,4.459,4.459,0,0,1-1.217.578l3.412,3.761H8741.5l-3.074-3.5h-3.96v3.516l-1.68-.017v-12.038Zm-4.777,6.981h4.574a2.607,2.607,0,0,0,1.055-.218,2.676,2.676,0,0,0,.864-.6,2.916,2.916,0,0,0,.577-.884,2.775,2.775,0,0,0,.209-1.077,2.618,2.618,0,0,0-.209-1.032,2.746,2.746,0,0,0-.577-.857,2.8,2.8,0,0,0-.864-.586,2.592,2.592,0,0,0-1.055-.219l-4.574.017Z" fill="red" /><path d="M8755.587,2298.905h-6.368l-1.731,4.129h-1.715l4.95-12.055h3.378l4.97,12.055h-1.75Zm-5.772-1.575h5.2l-2.554-6.141h-.088Z" fill="red" /><path d="M8766.506,2290.979l3.185,9.781,3.166-9.781h3.308l2.064,12.038h-1.661l-2.066-11.9h-.069l-3.937,11.9h-1.61l-3.955-11.9h-.068l-1.979,11.9H8761.2l2.047-12.038Z" fill="red" /></g></svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import loader from '~/components/loader'
import Nav from '~/components/sideNavContact'

export default {
  components: {
    loader,
    Nav
  },
  data () {
    return {
      posts: [],
      errors: {},
      media_ids: {},
      user_id: '17841435616161032',
      items: [],
      mobile: false,
      itemsWeb: [],
      tokenDelta: '',
      token: '',
      currentToken: 'IGQVJXaE1ueUFZAOEVhWWU1bFIwN3hRS2RNaUVPVjZAQYmluSmc0RU5IWUR4TWRwWGs3NFZAYLVoyUjZABazV1dDhMWmMxM1RWMmFTbjBSdHB4cTBXZAG5YVmVrWDQxMlJBaXFPN3haSWFsU004THVWeHV0egZDZD',
      loaded: false,
      clicked: false,
      phototrigger: false
    }
  },
  computed: {
    itemsFiltered () {
      return this.items.slice(0, 20)
    }
  },
  watch: {
    /* eslint no-useless-escape: "warn" */
    posts (newVal) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        this.mobile = true
        newVal.forEach((arrayItem) => {
          this.getImage(arrayItem.id)
          setTimeout(() => {
            this.loaded = true
          }, 500)
        })
      }
      if (this.mobile === false) {
        newVal.forEach((arrayItem) => {
          this.getImageWeb(arrayItem.id)
        })
      }
    },
    itemsWeb (newVal) {
      if (newVal.length === 20) {
        this.distributeWeb(newVal)
        setTimeout(() => {
          this.loaded = true
        }, 500)
      }
    },
    itemsFiltered (newVal) {
      if (newVal.length === 20) {
        const ver = this.iOSversion()
        if (ver === undefined) {
          newVal.forEach((arrayItem) => {
            this.getImageWeb(arrayItem.id)
          })
          return
        }
        if (ver[0] >= 6 && ver[0] <= 9) {
          const photos = document.getElementsByClassName('photo-container')
          for (let i = 0; i < photos.length; i++) {
            photos[i].classList.add('iphone6')
          }
        }
        this.loaded = true
        this.phototrigger = true
      }
    },
    tokenDelta (newVal) {
      console.log(newVal)
      if (newVal >= 864000) { // 10 days - 864000
        this.getNewTokenAndSet()
      }
    },
    clicked (newVal) {
      if (newVal === true) {
        document.addEventListener('click', (e) => {
          const target = e.target.getAttribute('id')
          const targetClass = e.target.getAttribute('class')
          console.log(target)
          console.log(targetClass)
          const t = e.target.nodeName
          if (target === null && targetClass === null && t !== 'rect') {
            this.clicked = false
          }
          if (target === null && targetClass === 'image') {
            this.clicked = false
          }
          if (target === null && targetClass === 'photo-container') {
            this.clicked = false
          }
          if (targetClass === 'side-nav-item blackText') {
            setTimeout(() => { this.clicked = false }, 1000)
          }
          if (target === 'film2') {
            setTimeout(() => {
              this.clicked = false
            }, 1000)
          }
        })
        document.addEventListener('touchstart', (e) => {
          const target = e.target.getAttribute('id')
          const targetClass = e.target.getAttribute('class')
          if (target === null && targetClass === null) {
            this.clicked = false
          }
          if (target === null && targetClass === 'image') {
            this.clicked = false
          }
          if (target === null && targetClass === 'photo-container') {
            this.clicked = false
          }
          if (targetClass === 'side-nav-item blackText') {
            setTimeout(() => { this.clicked = false }, 1000)
          }
          if (target === 'film2') {
            setTimeout(() => {
              this.clicked = false
            }, 1000)
          }
        })
      }
    },
    phototrigger () {
      const images = document.getElementsByClassName('image2')
      setTimeout(() => {
        let prevheight
        for (let i = 0; i < images.length; i++) {
          const height = images[i].offsetHeight
          if (i === 0) {
            prevheight = height
          }
          if (prevheight <= height + 50) {
            const newHeight = `${prevheight}px`
            images[i].style.height = newHeight
          }
        }
      }, 1000)
    }
  },
  async mounted () {
    this.token = localStorage.getItem('token')
    if (this.token === null) {
      this.token = 'IGQVJXaE1ueUFZAOEVhWWU1bFIwN3hRS2RNaUVPVjZAQYmluSmc0RU5IWUR4TWRwWGs3NFZAYLVoyUjZABazV1dDhMWmMxM1RWMmFTbjBSdHB4cTBXZAG5YVmVrWDQxMlJBaXFPN3haSWFsU004THVWeHV0egZDZD'
    }
    if (this.token !== this.currentToken) {
      this.token = this.currentToken
    }
    try {
      const response = await axios.get(`https://graph.instagram.com/17841400151653229?fields=media&access_token=${this.token}`)
      this.posts = response.data.media.data
    } catch (e) {
      console.log(e)
    }
    this.storePassThrough()
    window.addEventListener('orientationchange', function () {
      const originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display')
      document.body.style.display = 'none'
      setTimeout(function () {
        document.body.style.display = originalBodyStyle
      }, 10)
    })
  },
  methods: {
    async getImage (id) {
      const response = await axios.get(`https://graph.instagram.com/${id}?fields=media_url&access_token=${this.token}`)
      this.items.push(response.data.media_url)
    },
    async getImageWeb (id) {
      const response = await axios.get(`https://graph.instagram.com/${id}?fields=media_url&access_token=${this.token}`)
      this.itemsWeb.push(response.data.media_url)
    },
    distributeWeb (arr) {
      for (const [i, value] of arr.entries()) {
        if (i <= 4) {
          const elem = document.createElement('img')
          elem.setAttribute('src', `${value}`)
          document.getElementById('col-1').appendChild(elem)
          elem.setAttribute('class', 'image2')
        }
        if (i >= 5 && i <= 9) {
          const elem = document.createElement('img')
          elem.setAttribute('src', `${value}`)
          document.getElementById('col-2').appendChild(elem)
          elem.setAttribute('class', 'image2')
        }
        if (i >= 10 && i <= 14) {
          const elem = document.createElement('img')
          elem.setAttribute('src', `${value}`)
          document.getElementById('col-3').appendChild(elem)
          elem.setAttribute('class', 'image2')
        }
        if (i >= 15 && i <= 19) {
          const elem = document.createElement('img')
          elem.setAttribute('src', `${value}`)
          document.getElementById('col-4').appendChild(elem)
          elem.setAttribute('class', 'image2')
        }
        this.phototrigger = true
      }
    },
    iOSversion () {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)]
      }
    },
    storePassThrough () {
      const date = localStorage.getItem('date')
      if (date === null) {
        this.localStore()
        return
      }
      this.checkTokenDate()
    },
    localStore () {
      if (process.browser) {
        const timeNow = new Date()
        localStorage.setItem('date', timeNow)
        localStorage.setItem('token', this.token)
      }
    },
    checkTokenDate () {
      const date = localStorage.getItem('date')
      const dateParsed = Date.parse(date)
      const timeNow = new Date()
      const tokenTimeDiff = (timeNow - dateParsed) / 1000 // in s
      this.tokenDelta = tokenTimeDiff
    },
    async getNewTokenAndSet () {
      const response = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.token}`)
      this.token = response.data.access_token
      const timeNow = new Date()
      localStorage.setItem('token', this.token)
      localStorage.setItem('date', timeNow)
    }
  },
  head () {
    return {
      title: 'Photos'
    }
  },
  transition: 'tweakOpacity'
}
</script>

<style>
  /* mobile styles */
  #photo-wrap-mobile{
    display: flex;    /* iphone 6 fix */
    flex: 1;          /* iphone 6 fix */
    flex-wrap: wrap;  /* iphone 6 fix */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 1.5625em;
  }
  .iphone6 {
    width: 50% !important; /* iphone 6 fix  */
  }
  .photo-container:nth-child(odd), #photography {
    display: flex;

    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 10em;
  }
  .photo-container:nth-child(even){
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 12.5em;
  }
  #photography {
    width: 50%;
    height: 100%;     /* Iphonne 7 fix */
    margin-top: 2em;  /* Iphonne 7 fix */
  }
  .image {
    width: 10em;    /* Iphonne 7 fix */
    height: 7.5em;  /* Iphonne 7 fix */
    border-radius: 0.5%;
  }
  .image2 {
    width: 100%;
    height: 100%;
    margin: 1em;
    margin-bottom: 5em;
    border-radius: 0.5%;
  }
  #more-id {
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  #more-ig-svg{
    padding: 1.5em;
    position: absolute;
    right: 0;
  }
  .tweakOpacity-enter-active, .tweakOpacity-leave-active {
    transition: opacity .45s ease-in-out;
  }
  .tweakOpacity-enter, .tweakOpacity-leave-active {
    opacity: 0;
  }
  path {
    z-index: 99;
  }
  #photo-wrap {
    z-index: 100;
    position: relative;
  }
  @media only screen and (min-width: 640px) {
    #photography {
      margin: 3em 1em 3em 1em;
    }
    .photography-svg {
      height: 20em;
      width: 20em;
      margin-right: 10%;
    }
    #photo-wrap-web{
      height: 100%;
      display: flex;
      flex-direction: row;
      margin: 0 1.6525em
    }
    #col-1, #col-2, #col-3, #col-4 {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 25%;
      margin: 1em;
    }
    #col-1 {
      margin-top: 0;
    }
    #col-2 {
      margin-top: -5em;
    }
    #col-3 {
      margin-top: -10em;
    }
    #col-4 {
      margin-top: -15em;
    }
  }
  #navigation-photos{
    position: absolute;
    top: -3em;
  }
  #hamburgers {
    position: absolute;
    top: -1.5%;
    left: 0;
    padding: 1em;
    cursor: pointer;
  }
  @media only screen and (min-width: 640px) {
    #photography {
      width: 22%;
    }
    .photo-container:nth-child(even), .photo-container:nth-child(odd){
      height: 15em;
    }
    .image{
      width: 15em;
      height: 10em;
    }
  }
  @media all and (-ms-high-contrast:none)
  {
    *::-ms-backdrop, #home-wrap {
      overflow: hidden
    } /* IE11 */
  }
</style>
