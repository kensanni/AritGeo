export default {
    aritGeo: (arr) =>{
        if(Array.isArray(arr)){
            let diff = arr[1] - arr[0],
                ratio = arr[1] / arr[0],
                arith = true,
                geo = true;
            if(arr.length > 0){
                for(let i = 0; i < arr.length - 1; i++){
                    if( arr[i + 1] - arr[i] !== diff ){
                        arith = false;
                    }
                    if(arr[i + 1] / ratio !== arr[i]){
                        geo = false;
                    }
                }
                let results = arith === true ? "Arithmetic" : geo === true ?  "Geometric" :  -1;
                return results;
            }else {
                return 0;
            }
        }else{
            return ('Argument should be an Array');
        }
    }
};