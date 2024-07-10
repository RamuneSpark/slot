function gamepadInput(i,Button,gp,gamepads,Axis){
 
    
    if(padID[i].slice(0,12) == "PCEngine PAD"){
        
Button.a[i] = gp[i].buttons[BUTTON_A_INDEX];
Button.y[i] = gp[i].buttons[BUTTON_Y_INDEX];
Button.start[i] = gp[i].buttons[BUTTON_START_INDEX];
Button.select[i] = gp[i].buttons[BUTTON_SELECT_INDEX];
Button.up[i] = gp[i].buttons[BUTTON_UP_INDEX];
Button.down[i] = gp[i].buttons[BUTTON_DOWN_INDEX];
Button.left[i] = gp[i].buttons[BUTTON_LEFT_INDEX];
Button.right[i] = gp[i].buttons[BUTTON_RIGHT_INDEX];

        
           //Aボタン
    if(Button.y[i].value == 1.0) {
    k["A"][i] = true;
    }else{    
    k["A"][i] = false;
    }
    
    //Bボタン
    if(Button.a[i].value == 1.0) {
    k["B"][i] = true;
    }else{  
    k["B"][i] = false;   
    }
        
    //STARTボタン
    if(Button.start[i].value == 1.0){
    k["Start"][i] = true;
    }else{     
    k["Start"][i] = false;  
    }
    
    //SELECTボタン    
    if(Button.select[i].value == 1.0){
    k["Select"][i] = true;
    }else{
    k["Select"][i] = false;
    }
 
     
    let pkey = Math.floor(gp[i].axes[9] * 1000);
 
                                if(pkey == 3285){udk[i] = false; lrk[i] = false;}
                                if(pkey == -1000){udk[i] = "up"; lrk[i] = false;} 
                                if(pkey == 1000){udk[i] = "up"; lrk[i] = "left";} 
                                if(pkey == 714){udk[i] = false; lrk[i] = "left";} 
                                if(pkey == 428){udk[i] = "down"; lrk[i] = "left";} 
                                if(pkey == 142){udk[i] = "down"; lrk[i] = false;} 
                                if(pkey == -143){udk[i] = "down"; lrk[i] = "right";} 
                                if(pkey == -429){udk[i] = false; lrk[i] = "right";} 
                                if(pkey == -715){udk[i] = "up"; lrk[i] = "right";} 
      
        
        
    }else{
        
        
    
        
Button.a[i] = gp[i].buttons[BUTTON_A_INDEX];
Button.b[i] = gp[i].buttons[BUTTON_B_INDEX];
Button.x[i] = gp[i].buttons[BUTTON_X_INDEX];
Button.y[i] = gp[i].buttons[BUTTON_Y_INDEX];
Button.start[i] = gp[i].buttons[BUTTON_START_INDEX];
Button.select[i] = gp[i].buttons[BUTTON_SELECT_INDEX];
Button.up[i] = gp[i].buttons[BUTTON_UP_INDEX];
Button.down[i] = gp[i].buttons[BUTTON_DOWN_INDEX];
Button.left[i] = gp[i].buttons[BUTTON_LEFT_INDEX];
Button.right[i] = gp[i].buttons[BUTTON_RIGHT_INDEX];
Button.l[i] = gp[i].buttons[BUTTON_L_INDEX];
Button.r[i] = gp[i].buttons[BUTTON_R_INDEX];
Button.zl[i] = gp[i].buttons[BUTTON_ZL_INDEX];
Button.zr[i] = gp[i].buttons[BUTTON_ZR_INDEX];
        
Axis.L.Horizontal[i] = gp[i].axes[AXIS_L_HORIZONTAL_INDEX];
Axis.L.Vertical[i] = gp[i].axes[AXIS_L_VERTICAL_INDEX];
Axis.R.Horizontal[i] = gp[i].axes[AXIS_R_HORIZONTAL_INDEX];
Axis.R.Vertical[i] = gp[i].axes[AXIS_R_VERTICAL_INDEX];


    
    //Aボタン
    if(Button.a[i].value == 1.0) {
    k["A"][i] = true;
    }else{    
    k["A"][i] = false;
    }
    
    //Bボタン
    if(Button.b[i].value == 1.0) {
    k["B"][i] = true;
    }else{  
    k["B"][i] = false;   
    }
    
    //Xボタン
    if(Button.x[i].value == 1.0){
    k["X"][i] = true;
    }else{    
    k["X"][i] = false;
    }
    
     //Yボタン
    if(Button.y[i].value == 1.0){
    k["Y"][i] = true;
    }else{    
    k["Y"][i] = false;
    }
    
    //STARTボタン
    if(Button.start[i].value == 1.0){
    k["Start"][i] = true;
    }else{     
    k["Start"][i] = false;  
    }
    
    //SELECTボタン    
    if(Button.select[i].value == 1.0){
    k["Select"][i] = true;
    }else{
    k["Select"][i] = false;
    }
    
    //Lボタン
    if(Button.l[i].value == 1.0){
    k["L1"][i] = true;
    }else{     
    k["L1"][i] = false;
    }
    
    //Rボタン
    if(Button.r[i].value == 1.0){
    k["R1"][i] = true;
    }else{     
     k["R1"][i] = false;   
    }
    
    
    //ZLボタン
    if(Button.zl[i].value == 1.0){
    k["L2"][i] = true;
    }else{     
    k["L2"][i] = false;
    }
      
    //ZRボタン
    if(Button.zr[i].value == 1.0){
    k["R2"][i] = true;
    }else{     
     k["R2"][i] = false;   
    }
    
    
    
    //左右キー
        
       if(Button.left[i].value == 1.0){
    lrk[i] = "left"; 
        }else if(Button.right[i].value == 1.0){
        lrk[i] = "right"; 
    }else{
        lrk[i] = false; 
    }
    //上下キー
    
        if(Button.up[i].value == 1.0){
    udk[i] = "up"; 
        }else if(Button.down[i].value == 1.0){
        udk[i] = "down"; 
    }else{
        udk[i] = false; 
    }
    
Stick.L.H[i] = Math.trunc(10000*Axis.L.Horizontal[i]);
Stick.L.V[i] = Math.trunc(10000*Axis.L.Vertical[i]);
Stick.R.H[i] = Math.trunc(10000*Axis.R.Horizontal[i]);
Stick.R.V[i] = Math.trunc(10000*Axis.R.Vertical[i]);
   
        
        
        
        
    }
     }
    
