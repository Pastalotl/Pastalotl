function EEA(a,b,n,q,r,s,t){
    //if undefined, we assume n=0 and proceed accordingly
    n = n==undefined?0:n
    q = q==undefined?0:q
    if(n==0){
        s = 0
        t = 1
        r = a
    }
    if(n==1){
        s=1
        t=0
        let x = a
        let y = b
    }
    else{ 
        let y = r
        let x = q
        // s = s_(n-2) - q_(n-1) * s_(n-1)
        // t = t_(n-2) - q(n-1) * s_(n-1)
        //need to store s_(n-2),t_(n-2)
        // s = s_(n-2) - q*s
        // t = s_(n-2) - q*t
    }
    if(r==0){ //base case
        return {s:s,t:t,gcd:1}//something or other
    }
    //1: b = aq_1 + r_1
    //2: a = r_1 * q_2 + r_2
    //n: r_(n-2) = r_(n-2) * q_(n-1) + r_(n-1)
    q=Math.floor(y/x)
    r=y%x
    
    return EEA(a,b,n,q,r,s,t)
}