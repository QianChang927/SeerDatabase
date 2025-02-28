package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1403 extends BaseMapProcess
   {
       
      
      private var _countNum:int = 0;
      
      public function MapProcess_1403()
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
         conLevel["mc1"].gotoAndStop(1);
         conLevel["mc2"]["mc4"].gotoAndStop(1);
         conLevel["mc2"]["mc5"].gotoAndStop(1);
         conLevel["mc2"]["mc6"].gotoAndStop(1);
         conLevel["mc3"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               ++this._countNum;
               conLevel["mc2"]["mc" + (index + 3)].gotoAndStop(2);
               if(this._countNum == 3)
               {
                  conLevel["mc3"].visible = true;
                  AnimateManager.playMcAnimate(conLevel["mc3"],1,"mc7",function():void
                  {
                     _countNum = 0;
                     conLevel["mc2"]["mc4"].gotoAndStop(1);
                     conLevel["mc2"]["mc5"].gotoAndStop(1);
                     conLevel["mc2"]["mc6"].gotoAndStop(1);
                     conLevel["mc3"].visible = false;
                  },false,true);
               }
               break;
            case "boss":
               AnimateManager.playMcAnimate(conLevel["mc1"],2,"ani",function():void
               {
                  conLevel["mc1"].gotoAndStop(1);
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
