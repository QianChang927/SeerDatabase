package com.robot.app.bag
{
   import com.robot.app.ParseSocketError;
   import com.robot.core.behavior.ChangeNickBehavior;
   import com.robot.core.manager.MainManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.text.TextFieldType;
   import flash.utils.ByteArray;
   import org.taomee.utils.StringUtil;
   
   public class ChangeNickName
   {
       
      
      private var nickTxt:TextField;
      
      private var chNickBtn:SimpleButton;
      
      private var chNickTagBtn:SimpleButton;
      
      public function ChangeNickName()
      {
         super();
      }
      
      public function init(param1:MovieClip) : void
      {
         this.nickTxt = param1["name_txt"];
         this.nickTxt.type = TextFieldType.DYNAMIC;
         this.nickTxt.text = MainManager.actorInfo.nick;
         this.chNickBtn = param1["chNickBtn"] as SimpleButton;
         this.chNickBtn.addEventListener(MouseEvent.CLICK,this.onChangeTag);
         this.chNickTagBtn = param1["chNickTagBtn"] as SimpleButton;
         this.chNickTagBtn.addEventListener(MouseEvent.CLICK,this.onChangeName);
         this.chNickBtn.visible = true;
         this.chNickTagBtn.visible = false;
         ParseSocketError.addErrorListener(10005,this.onBadName);
      }
      
      private function onChangeTag(param1:MouseEvent) : void
      {
         this.chNickBtn.visible = false;
         this.chNickTagBtn.visible = true;
         this.nickTxt.type = TextFieldType.INPUT;
         this.nickTxt.background = true;
         this.nickTxt.backgroundColor = 11065592;
         this.nickTxt.setSelection(0,this.nickTxt.text.length);
         MainManager.getStage().focus = this.nickTxt;
      }
      
      private function onBadName(param1:Event) : void
      {
         this.nickTxt.text = MainManager.actorInfo.nick;
      }
      
      private function onChangeName(param1:MouseEvent) : void
      {
         this.nickTxt.text = StringUtil.trim(this.nickTxt.text);
         this.nickTxt.type = TextFieldType.DYNAMIC;
         this.nickTxt.background = false;
         this.chNickBtn.visible = true;
         this.chNickTagBtn.visible = false;
         if(this.nickTxt.text == "")
         {
            Alarm.show("昵称不能为空！");
            this.nickTxt.text = MainManager.actorInfo.nick;
            return;
         }
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeUTFBytes(this.nickTxt.text);
         if(_loc2_.length > 15)
         {
            Alarm.show("输入的文字太长了！");
            this.nickTxt.text = MainManager.actorInfo.nick;
            return;
         }
         if(this.nickTxt.text == MainManager.actorInfo.nick)
         {
            return;
         }
         MainManager.actorModel.execBehavior(new ChangeNickBehavior(this.nickTxt.text));
      }
      
      public function destory() : void
      {
         this.chNickBtn.removeEventListener(MouseEvent.CLICK,this.onChangeTag);
         this.chNickTagBtn.removeEventListener(MouseEvent.CLICK,this.onChangeName);
         ParseSocketError.removeErrorListener(10005,this.onBadName);
         this.nickTxt = null;
         this.chNickBtn = null;
         this.chNickTagBtn = null;
      }
   }
}
