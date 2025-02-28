package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1399 extends BaseMapProcess
   {
       
      
      private var _countNum1:int;
      
      private var _countNum2:int;
      
      private var _countNum3:int;
      
      private var _countNum4:int;
      
      private var _countNum5:int;
      
      private var _countNum6:int;
      
      public function MapProcess_1399()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this._countNum1 = this._countNum2 = this._countNum3 = this._countNum4 = this._countNum5 = this._countNum6 = 0;
         var _loc1_:int = 1;
         while(_loc1_ <= 6)
         {
            conLevel["mc"]["mc" + _loc1_].visible = false;
            _loc1_++;
         }
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         if(this._countNum1 != 0 && this._countNum1 == this._countNum2 && this._countNum1 == this._countNum3 && this._countNum1 == this._countNum4 && this._countNum1 == this._countNum5 && this._countNum1 == this._countNum6)
         {
            conLevel["mc"].gotoAndStop(2);
            AnimateManager.playMcAnimate(conLevel["mc"],2,"ani",function():void
            {
               conLevel["mc"]["ani"].gotoAndStop(conLevel["mc"]["ani"].totalFrames);
            },false,true);
         }
      }
      
      public function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn_1":
               if(this._countNum1 < 3)
               {
                  ++this._countNum1;
               }
               else
               {
                  this._countNum1 = 1;
               }
               conLevel["mc"]["mc1"].visible = true;
               conLevel["mc"]["mc1"].gotoAndStop(this._countNum1);
               this.update();
               break;
            case "btn_2":
               if(this._countNum2 < 3)
               {
                  ++this._countNum2;
               }
               else
               {
                  this._countNum2 = 1;
               }
               conLevel["mc"]["mc2"].visible = true;
               conLevel["mc"]["mc2"].gotoAndStop(this._countNum2);
               this.update();
               break;
            case "btn_3":
               if(this._countNum3 < 3)
               {
                  ++this._countNum3;
               }
               else
               {
                  this._countNum3 = 1;
               }
               conLevel["mc"]["mc3"].visible = true;
               conLevel["mc"]["mc3"].gotoAndStop(this._countNum3);
               this.update();
               break;
            case "btn_4":
               if(this._countNum4 < 3)
               {
                  ++this._countNum4;
               }
               else
               {
                  this._countNum4 = 1;
               }
               conLevel["mc"]["mc4"].visible = true;
               conLevel["mc"]["mc4"].gotoAndStop(this._countNum4);
               this.update();
               break;
            case "btn_5":
               if(this._countNum5 < 3)
               {
                  ++this._countNum5;
               }
               else
               {
                  this._countNum5 = 1;
               }
               conLevel["mc"]["mc5"].visible = true;
               conLevel["mc"]["mc5"].gotoAndStop(this._countNum5);
               this.update();
               break;
            case "btn_6":
               if(this._countNum6 < 3)
               {
                  ++this._countNum6;
               }
               else
               {
                  this._countNum6 = 1;
               }
               conLevel["mc"]["mc6"].visible = true;
               conLevel["mc"]["mc6"].gotoAndStop(this._countNum6);
               this.update();
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
