package com.robot.app.control.broadCast
{
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.TextEvent;
   import flash.text.TextField;
   
   public class GotoServerMapBroadCastType implements IBroadCastType
   {
       
      
      private var ui:MovieClip;
      
      private var _mapId:uint;
      
      public function GotoServerMapBroadCastType()
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
         this._mapId = Broadcast2016Controller._currentInfo.msg.readUnsignedInt();
         param1 = param1.replace(/\$地图名称\$/g,MapXMLInfo.getName(this._mapId));
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
               if(info.split("_")[1] == "$地图id$")
               {
                  if(MapManager.currentMap.id != this._mapId)
                  {
                     BtnClick.go(info.split("_")[0],String(this._mapId));
                  }
                  else
                  {
                     Alarm2.show("你已在活动场景中了哦~");
                  }
                  StatManager.sendStat2014("0128莱达宇宙红包雨","点击全服播报的【点我前往】","2022运营活动");
               }
               else
               {
                  BtnClick.go(info.split("_")[0],info.split("_")[1]);
               }
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
