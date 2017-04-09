function Seasons(year) {
    var k = Math.PI/180.0;
    var y = (year - 2000.0)/1000.0;

    return {
        spring: getDate(spring()),
        summer: getDate(summer()),
        autumn: getDate(autumn()),
        winter: getDate(winter()),
    };

    function spring() {
        var jd0, t, w, dL;
        //var jd0 = 2451623.80984 + (365242.37404 + (0.05169  - (0.00411 - 0.00057*y)*y)*y)*y;
        jd0 = 2451623.80984 + 365242.37404*y + 0.05169*y*y  - 0.00411*y*y*y - 0.00057*y*y*y*y;

        t = (jd0 - 2451545.0)/36525.0;
        w = 35999.373*t - 2.47;
        w = k*w;
        dL = 1.0 + 0.0334*Math.cos(w) + 0.0007*Math.cos(2*w);

        return jd0 + (0.00001*S(t))/dL - (66.0 + (year-2000)*1.0)/86400.0;
    }

    function summer() {
        var jd0, t, w, dL;
        //var jd0 = 2451716.56767 + (365241.62603 + (0.00325  - (0.00888 - 0.00030*y)*y)*y)*y;
        jd0 = 2451716.56767 + 365241.62603*y + 0.00325*y*y  + 0.00888*y*y*y - 0.00030*y*y*y*y;
        t = (jd0 - 2451545.0)/36525.0;
        w = 35999.373*t - 2.47;
        w = k*w;
        dL = 1.0 + 0.0334*Math.cos(w) + 0.0007*Math.cos(2*w);

        return jd0 + (0.00001*S(t))/dL - (66.0 + (year-2000)*1.0)/86400.0;
    }

    function autumn() {
        var jd0, t, w, dL;
        //var jd0 = 2451810.21715 + (365242.01767 + (0.11575  - (0.00337 - 0.00078*y)*y)*y)*y;
        jd0 = 2451810.21715 + 365242.01767*y - 0.11575*y*y  + 0.00337*y*y*y + 0.00078*y*y*y*y;

        t = (jd0 - 2451545.0)/36525.0;
        w = 35999.373*t - 2.47;
        w = k*w;
        dL = 1.0 + 0.0334*Math.cos(w) + 0.0007*Math.cos(2*w);

        return jd0 + (0.00001*S(t))/dL - (66.0 + (year-2000)*1.0)/86400.0;
    }

    function winter() {
        var jd0, t, w, dL;
        //var jd0 = 2451900.05952 + (365242.74049 + (0.06223  - (0.00823 - 0.00032*y)*y)*y)*y;
        jd0 = 2451900.05952 + 365242.74049*y - 0.06223*y*y  - 0.00823*y*y*y + 0.00032*y*y*y*y;

        t = (jd0 - 2451545.0)/36525.0;
        w = 35999.373*t - 2.47;
        w = k*w;
        dL = 1.0 + 0.0334*Math.cos(w) + 0.0007*Math.cos(2*w);

        return jd0 + (0.00001*S(t))/dL - (66.0 + (year-2000)*1.0)/86400.0;
    }

    function S(t) {
        var x;
        x = 	485*Math.cos(k*(324.96 + 1934.136*t));
        x = x + 203*Math.cos(k*(337.23 + 32964.467*t));
        x = x + 199*Math.cos(k*(342.08 + 20.186*t));
        x = x + 182*Math.cos(k*(27.85  + 445267.112*t));
        x = x + 156*Math.cos(k*(73.14  + 45036.886*t));
        x = x + 136*Math.cos(k*(171.52 + 22518.443*t));
        x = x + 77*Math.cos(k*(222.54  + 65928.934*t));
        x = x + 74*Math.cos(k*(296.72  + 3034.906*t));
        x = x + 70*Math.cos(k*(243.58  + 9037.513*t));
        x = x + 58*Math.cos(k*(119.81  + 33718.147*t));
        x = x + 52*Math.cos(k*(297.17  + 150.678*t));
        x = x + 50*Math.cos(k*(21.02   + 2281.226*t));

        x = x + 45*Math.cos(k*(247.54  + 29929.562*t));
        x = x + 44*Math.cos(k*(325.15  + 31555.956*t));
        x = x + 29*Math.cos(k*(60.93   + 4443.417*t));
        x = x + 18*Math.cos(k*(155.12   + 67555.328*t));

        x = x + 17*Math.cos(k*(288.79  + 4562.452*t));
        x = x + 16*Math.cos(k*(198.04  + 62894.029*t));
        x = x + 14*Math.cos(k*(199.76  + 31436.921*t));
        x = x + 12*Math.cos(k*(95.39   + 14577.848*t));
        x = x + 12*Math.cos(k*(287.11  + 31931.756*t));
        x = x + 12*Math.cos(k*(320.81  + 34777.259*t));
        x = x + 9*Math.cos(k*(227.73   + 1222.114*t));
        x = x + 8*Math.cos(k*(15.45    + 16859.074*t));

        return x;
    }

    function getDate(JD) {
        var hour, day, month, year;
        var B, D, F;
        var JD0, C, E;
        var diff, min, str;

        JD0 = Math.floor(JD + 0.5);
        B = Math.floor((JD0-1867216.25)/36524.25);
        C = JD0 + B - Math.floor(B/4) + 1525.0;
        D = Math.floor((C-122.1)/365.25);
        E = 365.0*D + Math.floor(D/4);
        F = Math.floor((C-E)/30.6001);
        day = Math.floor(C-E+0.5) - Math.floor(30.6001*F);
        month = F - 1 - 12*Math.floor(F/14);
        year = D - 4715 - Math.floor((7+month)/10);
        hour = 24.0*(JD + 0.5 - JD0);
        diff = Math.abs(hour) - Math.floor(Math.abs(hour));
        min = Math.floor(Math.round(diff*60.0));
        if (min==60) {min=0; hour=hour+1;}

        return new Date(Date.UTC(year, month-1, day, hour, min));
    }
}

module.exports = Seasons;
