package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   
   public class FridayNiuDan extends MapObject
   {
       
      
      public function FridayNiuDan(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         this.addChild(param1);
         super.onLoadView(param1);
         param1.scaleX = param1.scaleY = scale;
         this.refresh();
      }
      
      private function refresh(param1:* = null) : void
      {
         var e:* = param1;
         var theDay:Date = new Date(SystemTimerManager.time * 1000);
         if(theDay.day != 5)
         {
            visible = false;
            return;
         }
         KTool.getBitSet([2000023],function(param1:Array):void
         {
            if(param1[0] == 1)
            {
               visible = false;
            }
            else
            {
               visible = true;
            }
         });
      }
      
      override public function destory() : void
      {
         super.destory();
      }
   }
}
