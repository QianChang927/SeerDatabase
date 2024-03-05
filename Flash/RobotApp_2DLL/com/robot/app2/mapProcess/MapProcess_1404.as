package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1404 extends BaseMapProcess
   {
       
      
      private var _countNum1:int = 1;
      
      private var _countNum2:int = 1;
      
      private var _countNum3:int = 1;
      
      public function MapProcess_1404()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         conLevel["mc"]["mc1"].gotoAndStop(this._countNum1);
         conLevel["mc"]["mc2"].gotoAndStop(this._countNum2);
         conLevel["mc"]["mc3"].gotoAndStop(this._countNum3);
         if(this._countNum1 == 3 && this._countNum2 == 3 && this._countNum3 == 3)
         {
            conLevel["mc"].gotoAndStop(2);
            AnimateManager.playMcAnimate(conLevel["mc"],2,"ani",function():void
            {
               conLevel["mc"]["ani"].visible = false;
            },false,true);
         }
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "mcc_" + _loc2_:
               if(_loc2_ != 3)
               {
                  ++this._countNum1;
               }
               else
               {
                  this._countNum1 = 1;
               }
               this.update();
               break;
            case "des_" + _loc2_:
               if(_loc2_ != 3)
               {
                  ++this._countNum2;
               }
               else
               {
                  this._countNum2 = 1;
               }
               this.update();
               break;
            case "str_" + _loc2_:
               if(_loc2_ != 3)
               {
                  ++this._countNum3;
               }
               else
               {
                  this._countNum3 = 1;
               }
               this.update();
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
