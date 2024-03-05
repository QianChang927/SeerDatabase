package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app2.systems.mapObject.MapObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class PandoraBoxBtn extends MapObject
   {
       
      
      private var _mc:MovieClip;
      
      public function PandoraBoxBtn(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onMouseOver(param1:Event) : void
      {
         if(this._mc)
         {
            this._mc.gotoAndStop(2);
         }
      }
      
      override protected function onMouseOut(param1:Event) : void
      {
         if(this._mc)
         {
            this._mc.gotoAndStop(1);
         }
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         this.addChild(param1);
         this._mc = param1;
      }
   }
}
