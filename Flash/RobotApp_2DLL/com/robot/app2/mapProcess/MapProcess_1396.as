package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   
   public class MapProcess_1396 extends BaseMapProcess
   {
       
      
      private var m_countNum:int = 0;
      
      public function MapProcess_1396()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         conLevel["Mc"].gotoAndStop(2);
         setTimeout(function():void
         {
            conLevel["Mc"]["mc1"].gotoAndStop(1);
            conLevel["Mc"]["mc2"].gotoAndStop(1);
            conLevel["Mc"]["mc3"].gotoAndStop(1);
         },200);
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_" + index:
               ++this.m_countNum;
               conLevel["Mc"]["mc" + index].gotoAndStop(2);
               if(this.m_countNum == 3)
               {
                  conLevel["Mc"].gotoAndStop(1);
                  AnimateManager.playMcAnimate(conLevel["Mc"],1,"mc",function():void
                  {
                     conLevel["Mc"]["mc"].gotoAndStop(conLevel["Mc"]["mc"].totalFrames);
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         super.destroy();
      }
   }
}
