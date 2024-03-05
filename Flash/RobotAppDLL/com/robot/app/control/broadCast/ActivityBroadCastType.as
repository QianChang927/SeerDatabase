package com.robot.app.control.broadCast
{
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.TextEvent;
   import flash.text.TextField;
   
   public class ActivityBroadCastType implements IBroadCastType
   {
       
      
      private var ui:MovieClip;
      
      public function ActivityBroadCastType()
      {
         super();
      }
      
      public function handleHtmlStr(param1:String, param2:MovieClip) : void
      {
         this.ui = param2;
         if(this.ui == null)
         {
            return;
         }
         this.ui["txt"].addEventListener(TextEvent.LINK,this.onTxtLink);
         param1 = param1.replace(/\$米米号\$/g,Broadcast2016Controller._currentInfo.nick);
         param1 = param1.replace(/\$玩家昵称\$/g,Broadcast2016Controller._currentInfo.nick);
         var _loc3_:uint = uint(Broadcast2016Controller._currentInfo.msg.readUnsignedInt());
         param1 = param1.replace(/\$活动参与人数\$/g,_loc3_);
         var _loc4_:uint = uint(Broadcast2016Controller._currentInfo.msg.readUnsignedInt());
         param1 = param1.replace(/\$剩余奖励\$/g,_loc4_);
         (this.ui["txt"] as TextField).htmlText = param1;
      }
      
      private function onTxtLink(param1:TextEvent) : void
      {
         var event:TextEvent = param1;
         var info:String = String(event.text.split(":")[1]);
         switch(event.text)
         {
            case "米米号":
               Alert.show("你想和" + Broadcast2016Controller._currentInfo.nick + "(" + Broadcast2016Controller._currentInfo.userId + ")\r成为好友吗？",function():void
               {
                  RelationManager.addFriend(Broadcast2016Controller._currentInfo.userId);
               });
               break;
            case "跳转:" + info:
               BtnClick.go(info.split("_")[0],info.split("_")[1]);
               break;
            case "vip":
         }
      }
      
      public function destroy() : void
      {
         if(this.ui != null)
         {
            this.ui.removeEventListener(TextEvent.LINK,this.onTxtLink);
            this.ui = null;
         }
      }
   }
}
