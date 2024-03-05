package com.robot.app.extFun
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_2 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_2()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         this._ui.addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this.onOut(null);
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         var _loc4_:MovieClip = null;
         var _loc2_:uint = uint(this._ui["effect"].numChildren);
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            (_loc4_ = this._ui["effect"].getChildAt(_loc3_) as MovieClip).gotoAndPlay(1);
            _loc3_++;
         }
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         var _loc4_:MovieClip = null;
         var _loc2_:uint = uint(this._ui["effect"].numChildren);
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            (_loc4_ = this._ui["effect"].getChildAt(_loc3_) as MovieClip).gotoAndStop(1);
            _loc3_++;
         }
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.superNono)
         {
            PetManager.cureAll();
         }
         else
         {
            Alert.show("恢复体力需要花费50赛尔豆，你确定要为你的精灵们恢复体力吗？",function():void
            {
               PetManager.cureAll();
            });
         }
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
         this._ui.removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
