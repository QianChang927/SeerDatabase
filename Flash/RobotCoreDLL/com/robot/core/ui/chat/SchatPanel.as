package com.robot.core.ui.chat
{
   import com.robot.core.info.NewChatInfo;
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.UIManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class SchatPanel extends MovieClip
   {
       
      
      private var _ui:MovieClip;
      
      private var chatItems:Array;
      
      private var _hideState:Boolean;
      
      private var vsc:com.robot.core.ui.chat.VScrollerBoxUi;
      
      public function SchatPanel()
      {
         super();
         this._ui = UIManager.getMovieClip("schat");
         addChild(this._ui);
         this.hideState = true;
         this.showChat();
         this._ui.addEventListener(MouseEvent.CLICK,this.btnClickHandle);
         EventManager.addEventListener(ChatManager.RECEIVE_NEW_INFO,this.addchatHande);
         this._ui["mc"]["chatMc"].addEventListener(MouseEvent.MOUSE_WHEEL,this.wheelHandle);
         this.vsc = new com.robot.core.ui.chat.VScrollerBoxUi(362,112,this._ui["mc"]["chatMc"]);
      }
      
      private function wheelHandle(param1:MouseEvent) : void
      {
      }
      
      private function btnClickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "showBtn":
               this.hideState = false;
               break;
            case "hideBtn":
               this.hideState = true;
               break;
            case "btn":
               this.hideState = true;
               ChatManager.getinstance().showChatPanelToTab(0);
         }
      }
      
      public function showChat() : void
      {
         var _loc1_:Array = ChatManager.getinstance().getContent();
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            this.addChat(_loc1_[_loc2_] as NewChatInfo);
            _loc2_++;
         }
      }
      
      private function addchatHande(param1:DynamicEvent) : void
      {
         var _loc2_:NewChatInfo = param1.paramObject as NewChatInfo;
         this.addChat(_loc2_);
      }
      
      public function addChat(param1:NewChatInfo) : void
      {
         var _loc2_:ChatSWinItemRender = null;
         _loc2_ = new ChatSWinItemRender();
         _loc2_.dataChanged(param1);
         var _loc3_:Rectangle = this._ui["mc"]["chatMc"].getBounds(this._ui["mc"]["chatMc"]);
         var _loc4_:Number = _loc3_.height;
         _loc2_.y = _loc4_ + 8;
         _loc2_.addEventListener(MouseEvent.CLICK,this.sitemClick);
         this._ui["mc"]["chatMc"].addChild(_loc2_);
         this.vsc.updateScoll();
      }
      
      public function sitemClick(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         var _loc2_:ChatSWinItemRender = param1.currentTarget as ChatSWinItemRender;
         var _loc3_:int = _loc2_.obj.type;
         this.hideState = true;
         ChatManager.getinstance().showChatPanelToTab(_loc3_);
      }
      
      public function get hideState() : Boolean
      {
         return this._hideState;
      }
      
      public function set hideState(param1:Boolean) : void
      {
         this._hideState = param1;
         this._ui["showBtn"].visible = this.hideState;
         this._ui["mc"].visible = !this.hideState;
      }
   }
}
