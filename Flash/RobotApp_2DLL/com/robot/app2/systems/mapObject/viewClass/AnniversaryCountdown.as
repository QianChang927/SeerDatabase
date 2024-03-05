package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.Anniversary2016Controller;
   import com.robot.app2.systems.mapObject.MapObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class AnniversaryCountdown extends MapObject
   {
       
      
      public function AnniversaryCountdown(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onMouseOver(param1:Event) : void
      {
      }
      
      override protected function onMouseOut(param1:Event) : void
      {
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         this.addChild(param1);
         KTool.showScore(param1["days"],Anniversary2016Controller.leftDays,0,true);
         super.onLoadView(param1);
      }
   }
}
