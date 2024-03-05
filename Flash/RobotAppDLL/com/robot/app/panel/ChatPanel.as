package com.robot.app.panel
{
   import com.robot.app.user.UserInfoController;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.event.ChatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.uic.TextScrollBar;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.text.TextField;
   import flash.utils.getDefinitionByName;
   
   public class ChatPanel extends Sprite
   {
       
      
      private var _mainUI:Sprite;
      
      private var _txt:TextField;
      
      private var _tsb:TextScrollBar;
      
      private var expBtn:SimpleButton;
      
      private var expMc:MovieClip;
      
      private var _etype:int;
      
      public function ChatPanel(param1:Sprite)
      {
         super();
         this._mainUI = param1;
         this._txt = this._mainUI["txt"];
         this._txt.mouseEnabled = false;
         this._tsb = new TextScrollBar(this._mainUI,this._txt,this._mainUI["upBtn"],this._mainUI["downBtn"]);
         this.expBtn = this._mainUI["emotion"];
         this.expMc = this._mainUI["expressionMc"];
         this.expBtn.addEventListener(MouseEvent.CLICK,this.expClickHandle);
         this.expMc.addEventListener(MouseEvent.CLICK,this.onexpItemClick);
         MessageManager.addEventListener(ChatEvent.CHAT_COM,this.onChat);
         this._mainUI["bgmc"].addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._mainUI["bgmc"].addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         this.etype = 0;
      }
      
      private function onDragDown(param1:Event) : void
      {
         this._mainUI.startDrag();
      }
      
      private function onDragUp(param1:Event) : void
      {
         this._mainUI.stopDrag();
      }
      
      private function expClickHandle(param1:MouseEvent) : void
      {
         this.expMc.visible = !this.expMc.visible;
      }
      
      private function onexpItemClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc2_:String = String(param1.target.name);
         _loc3_ = parseInt(_loc2_.split("_")[1]);
         switch(_loc2_)
         {
            case "e_" + _loc3_:
               this.etype = _loc3_;
               break;
            case "fle_" + _loc3_:
               this.expMc.visible = false;
               _loc4_ = "$" + _loc3_;
               this.sendMsg(_loc4_);
               break;
            case "h5e_" + _loc3_:
               this.expMc.visible = false;
               _loc5_ = "#" + (_loc3_ + 1);
               this.sendMsg(_loc5_);
         }
      }
      
      private function sendMsg(param1:String) : void
      {
         var str:String = param1;
         var KTool:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         KTool.getMultiValue([124651],function(param1:Array):void
         {
            var _loc3_:Date = null;
            var _loc2_:int = int(SystemTimerManager.time);
            if(param1[0] > _loc2_)
            {
               _loc3_ = new Date(param1[0] * 1000);
               Alarm.show("您已被禁言，暂时无法发布任何信息！（禁言结束时间为" + _loc3_.getFullYear() + "年" + (_loc3_.getMonth() + 1) + "月" + _loc3_.getDate() + "日" + _loc3_.getHours() + "时" + _loc3_.getMinutes() + "分)");
            }
            else
            {
               MainManager.actorModel.execBehavior(new ChatBehavior(str));
               expMc.visible = false;
            }
         });
      }
      
      public function set etype(param1:int) : void
      {
         this._etype = param1;
         this.expMc.gotoAndStop(this.etype + 1);
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            this.expMc["ebtnmc_" + _loc2_].gotoAndStop(_loc2_ == this.etype ? 2 : 1);
            _loc2_++;
         }
      }
      
      public function get etype() : int
      {
         return this._etype;
      }
      
      public function show() : void
      {
         this._mainUI.visible = true;
         this.expMc.visible = false;
         this.etype = 0;
      }
      
      public function hide() : void
      {
         this._mainUI.visible = false;
         dispatchEvent(new Event(Event.CLOSE));
      }
      
      private function onChat(param1:ChatEvent) : void
      {
         var _loc5_:* = null;
         if(SystemTimerManager.mingganshiqiChat())
         {
            return;
         }
         var _loc2_:String = String(param1.info.msg);
         var _loc3_:String = "#00ffff";
         var _loc4_:String = "#99ff00";
         if(MainManager.actorID == param1.info.senderID)
         {
            _loc5_ = "<font size=\'12\' color=\'" + _loc3_ + "\'>" + param1.info.senderNickName + ":</font>" + "<font size=\'12\' color=\'#ffffff\'>" + _loc2_ + "</font>" + "\n";
         }
         else
         {
            _loc5_ = "<a href=\'event:" + param1.info.senderID + "\'><font size=\'12\' color=\'" + _loc4_ + "\'>" + param1.info.senderNickName + ":</font></a>" + "<font size=\'12\' color=\'#ffffff\'>" + _loc2_ + "</font>" + "\n";
         }
         this._txt.htmlText += _loc5_;
         this._txt.addEventListener(TextEvent.LINK,this.linkHandler);
         this._tsb.checkScroll();
      }
      
      private function linkHandler(param1:TextEvent) : void
      {
         var _loc2_:uint = uint(param1.text);
         if(MainManager.actorID != _loc2_)
         {
            UserInfoController.show(_loc2_);
         }
      }
   }
}
