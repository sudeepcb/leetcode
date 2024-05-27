var numUniqueEmails = function(emails) {
    var formattedEmail = new Map();
    var currentEmail = '';
    var j = 0;
    while(j < emails.length){
        var domain = false;
        var ignore = false;
        for(var i = 0; i < emails[j].length; i++){
            if(emails[j][i] == '.' && domain == false){
                continue;
            }

            if(emails[j][i] == '+' && domain == false){
              ignore = true;
              continue;
            }

            if(emails[j][i] == '@') {
                domain = true;
                ignore = false;
            }
            if(!ignore){
                currentEmail += emails[j][i];
            }
        }
        j++;
        formattedEmail.set(currentEmail, 1);
        currentEmail = '';
    }

    return formattedEmail.size;
};

console.log(numUniqueEmails(["fg.r.u.uzj+o.pw@kziczvh.com","r.cyo.g+d.h+b.ja@tgsg.z.com","fg.r.u.uzj+o.f.d@kziczvh.com","r.cyo.g+ng.r.iq@tgsg.z.com","fg.r.u.uzj+lp.k@kziczvh.com","r.cyo.g+n.h.e+n.g@tgsg.z.com","fg.r.u.uzj+k+p.j@kziczvh.com","fg.r.u.uzj+w.y+b@kziczvh.com","r.cyo.g+x+d.c+f.t@tgsg.z.com","r.cyo.g+x+t.y.l.i@tgsg.z.com","r.cyo.g+brxxi@tgsg.z.com","r.cyo.g+z+dr.k.u@tgsg.z.com","r.cyo.g+d+l.c.n+g@tgsg.z.com","fg.r.u.uzj+vq.o@kziczvh.com","fg.r.u.uzj+uzq@kziczvh.com","fg.r.u.uzj+mvz@kziczvh.com","fg.r.u.uzj+taj@kziczvh.com","fg.r.u.uzj+fek@kziczvh.com"]));