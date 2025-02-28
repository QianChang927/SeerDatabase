package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   
   public class MapProcess_1398 extends BaseMapProcess
   {
       
      
      private var _count:int = 0;
      
      public function MapProcess_1398()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         var e:* = param1;
         if(this._count == 4)
         {
            AnimateManager.playMcAnimate(conLevel["mc"],2,"ani",function():void
            {
               conLevel["mc"].gotoAndStop(1);
               _count = 0;
               setTimeout(function():void
               {
                  conLevel["mc"]["btn_1"].visible = true;
                  conLevel["mc"]["btn_2"].visible = true;
                  conLevel["mc"]["btn_3"].visible = true;
                  conLevel["mc"]["btn_4"].visible = true;
               },200);
            },false,true);
         }
      }
      
      public function onClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn_" + _loc2_:
               conLevel["mc"]["btn_" + _loc2_].visible = false;
               ++this._count;
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
