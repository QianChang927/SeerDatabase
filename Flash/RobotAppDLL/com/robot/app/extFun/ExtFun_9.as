package com.robot.app.extFun
{
   import com.robot.app.im.talk.TalkPanelManager;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.mode.IExtFun;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_9 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_9()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var _loc2_:Array = RelationManager.getFriendInfos(false);
         var _loc3_:UserInfo = _loc2_[int(Math.random() * _loc2_.length)];
         TalkPanelManager.showTalkPanel(_loc3_.userID);
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
   }
}
