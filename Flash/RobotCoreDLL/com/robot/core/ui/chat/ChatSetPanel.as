package com.robot.core.ui.chat
{
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class ChatSetPanel extends MovieClip
   {
       
      
      private var _ui:MovieClip;
      
      private var selectState:Array;
      
      public function ChatSetPanel()
      {
         super();
         this._ui = UIManager.getMovieClip("setPanel");
         this.selectState = [ChatManager.getinstance().showSysInfoNote,!ChatManager.getinstance().showBattleTeamInfoNote,ChatManager.getinstance().showFWindow];
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            this._ui["s_" + _loc1_].addEventListener(MouseEvent.CLICK,this.uiClickHandle);
            this._ui["s_" + _loc1_].gotoAndStop(!!this.selectState[_loc1_] ? 2 : 1);
            _loc1_++;
         }
         addChild(this._ui);
         this._ui.addEventListener(MouseEvent.CLICK,this.chatPanelClickHandle);
      }
      
      private function chatPanelClickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "close":
               ChatManager.getinstance().showSetPanel(false);
         }
      }
      
      private function uiClickHandle(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var index:int = 0;
         var e:MouseEvent = param1;
         var ename:String = String(e.target.name);
         mc = e.target as MovieClip;
         index = parseInt(ename.split("_")[1]);
         if(index == 2)
         {
            Alarm.show("页游端暂无此功能");
            return;
         }
         if(index == 1 && !this.selectState[index])
         {
            Alert.show("开启后无法接收到战队消息，也无法在战队频道发言，您确认开启吗？",function():void
            {
               selectState[index] = !selectState[index];
               mc.gotoAndStop(!!selectState[index] ? 2 : 1);
               ChatManager.getinstance().chatSet(true,selectState[0],!selectState[1],selectState[2]);
            });
            return;
         }
         this.selectState[index] = !this.selectState[index];
         mc.gotoAndStop(!!this.selectState[index] ? 2 : 1);
         ChatManager.getinstance().chatSet(true,this.selectState[0],!this.selectState[1],this.selectState[2]);
      }
      
      public function destroy() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            this._ui["s_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.uiClickHandle);
            _loc1_++;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.chatPanelClickHandle);
         removeChild(this._ui);
      }
   }
}
