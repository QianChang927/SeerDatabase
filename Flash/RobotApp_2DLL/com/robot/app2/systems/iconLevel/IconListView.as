package com.robot.app2.systems.iconLevel
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class IconListView
   {
      
      private static const uiX:int = 905;
      
      private static const uiY:int = 56;
      
      private static const uiWidth:int = 54;
      
      private static const uiHeight:int = 60;
       
      
      public var ui:MovieClip;
      
      public var url:String;
      
      public var direction:String;
      
      public var index:int;
      
      public var initFunc:Function;
      
      public var iconArr:Array;
      
      public function IconListView(param1:String, param2:String, param3:int, param4:String, param5:Array)
      {
         var _loc6_:Array = null;
         var _loc7_:Class = null;
         super();
         this.url = param1;
         this.direction = param2;
         this.index = param3;
         this.ui = UIManager.getMovieClip(param1);
         if(param4)
         {
            _loc6_ = param4.split(":");
            _loc7_ = getDefinitionByName(String(_loc6_[0])) as Class;
            this.initFunc = _loc7_[String(_loc6_[1])];
         }
         this.iconArr = param5;
      }
      
      public function addIconListToIconLevel() : void
      {
         if(!this.ui)
         {
            return;
         }
         this.ui.gotoAndStop(1);
         this.ui.x = uiX - uiWidth * (this.index - 1);
         this.ui.y = uiY;
         if(this.initFunc != null)
         {
            this.initFunc(this.ui);
         }
         this.ui.addEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
         this.ui.addEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
         if(DisplayUtil.hasParent(this.ui) == false)
         {
            LevelManager.iconLevel.addChild(this.ui);
         }
         var _loc1_:int = 0;
         while(_loc1_ < this.iconArr.length)
         {
            (this.iconArr[_loc1_] as BarIconView).addToIconLevel();
            (this.iconArr[_loc1_] as BarIconView).ui.y = uiHeight * _loc1_;
            _loc1_++;
         }
         this.ui.addChild((this.iconArr[0] as BarIconView).ui);
      }
      
      private function onRollOver(param1:MouseEvent) : void
      {
         this.ui.gotoAndStop(2);
         DisplayUtil.removeForParent((this.iconArr[0] as BarIconView).ui);
         var _loc2_:int = 0;
         while(_loc2_ < this.iconArr.length)
         {
            this.ui.addChild((this.iconArr[_loc2_] as BarIconView).ui);
            _loc2_++;
         }
         this.ui["bg"].height = uiHeight * this.iconArr.length;
      }
      
      private function onRollOut(param1:MouseEvent) : void
      {
         this.ui.gotoAndStop(1);
         var _loc2_:int = 0;
         while(_loc2_ < this.iconArr.length)
         {
            DisplayUtil.removeForParent((this.iconArr[_loc2_] as BarIconView).ui);
            _loc2_++;
         }
         this.ui.addChild((this.iconArr[0] as BarIconView).ui);
      }
      
      public function removeIconListFromIconLevel() : void
      {
         DisplayUtil.removeForParent(this.ui);
         var _loc1_:int = 0;
         while(_loc1_ < this.iconArr.length)
         {
            (this.iconArr[_loc1_] as BarIconView).removeFromIconLevel();
            _loc1_++;
         }
         this.ui.removeEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
         this.ui.removeEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
      }
   }
}
