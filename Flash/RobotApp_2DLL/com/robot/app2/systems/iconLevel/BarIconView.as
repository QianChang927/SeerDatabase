package com.robot.app2.systems.iconLevel
{
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class BarIconView
   {
       
      
      public var ui:MovieClip;
      
      public var url:String;
      
      public var tips:String;
      
      public var priority:int;
      
      public var mouseClickFunc:Function;
      
      public var initFunc:Function;
      
      public function BarIconView(param1:String, param2:String, param3:int, param4:String, param5:String)
      {
         var _loc8_:Array = null;
         var _loc9_:Class = null;
         super();
         this.url = param1;
         this.tips = param2;
         this.priority = param3;
         this.ui = UIManager.getMovieClip(param1);
         var _loc6_:Array = param4.split(":");
         var _loc7_:Class = getDefinitionByName(String(_loc6_[0])) as Class;
         this.mouseClickFunc = _loc7_[String(_loc6_[1])];
         if(param5 != "")
         {
            _loc8_ = param5.split(":");
            _loc9_ = getDefinitionByName(String(_loc8_[0])) as Class;
            this.initFunc = _loc9_[String(_loc8_[1])];
         }
      }
      
      public function addToIconLevel() : void
      {
         if(this.ui == null)
         {
            return;
         }
         this.ui.cacheAsBitmap = true;
         this.ui.buttonMode = true;
         if(this.tips != "")
         {
            ToolTipManager.add(this.ui,this.tips);
         }
         this.ui.addEventListener(MouseEvent.CLICK,this.onClick);
         if(this.initFunc != null)
         {
            this.initFunc(this.ui);
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this.tips != "")
         {
            StatManager.sendStat2014("主界面icon",this.tips,"主界面icon");
         }
         this.mouseClickFunc(this.ui);
      }
      
      public function removeFromIconLevel() : void
      {
         ToolTipManager.remove(this.ui);
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
   }
}
