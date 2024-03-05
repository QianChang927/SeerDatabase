package com.robot.app.control.broadCast
{
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.text.TextField;
   
   public class MonsterSpecBroadCastType implements IBroadCastType
   {
       
      
      private var ui:MovieClip;
      
      private var showTips:Boolean = false;
      
      private var _itemId:uint;
      
      private var _itemInfo:SingleItemInfo;
      
      public function MonsterSpecBroadCastType()
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
         this.ui["txt"].addEventListener(MouseEvent.MOUSE_MOVE,this.onTxtMove);
         this.ui["txt"].addEventListener(MouseEvent.ROLL_OUT,this.onTxtOut);
         param1 = param1.replace(/\$米米号\$/g,Broadcast2016Controller._currentInfo.nick);
         param1 = param1.replace(/\$玩家昵称\$/g,Broadcast2016Controller._currentInfo.nick);
         var _loc3_:int = int(Broadcast2016Controller._currentInfo.msg.readUnsignedInt());
         var _loc4_:String = String(PetXMLInfo.getName(_loc3_));
         var _loc5_:String = String(Broadcast2016Controller._currentInfo.msg.readUTFBytes(16));
         param1 = param1.replace(/\$精灵昵称\$/g,_loc5_);
         var _loc6_:int = int(Broadcast2016Controller._currentInfo.msg.readUnsignedInt());
         param1 = param1.replace(/\$精灵特性\$/g,_loc6_);
         var _loc7_:uint = uint(Broadcast2016Controller._currentInfo.msg.readUnsignedInt());
         param1 = param1.replace(/\$精灵等级\$/g,_loc7_);
         (this.ui["txt"] as TextField).htmlText = param1;
      }
      
      private function onTxtLink(param1:TextEvent) : void
      {
         var event:TextEvent = param1;
         var info:String = String(event.text.split(":")[1]);
         switch(event.text)
         {
            case "米米号":
            case "玩家昵称":
               Alert.show("你想和" + Broadcast2016Controller._currentInfo.nick + "(" + Broadcast2016Controller._currentInfo.userId + ")\r成为好友吗？",function():void
               {
                  RelationManager.addFriend(Broadcast2016Controller._currentInfo.userId);
               });
               break;
            case "精灵特性":
            case "精灵等级":
               break;
            case "跳转:" + info:
               BtnClick.go(info.split("_")[0],info.split("_")[1]);
         }
      }
      
      private function onTxtMove(param1:MouseEvent) : void
      {
         var _loc2_:String = (this.ui["txt"] as TextField).getTextFormat((this.ui["txt"] as TextField).getCharIndexAtPoint(param1.localX,param1.localY)).url;
         if(_loc2_ == "event:道具信息")
         {
            if(this.showTips)
            {
               return;
            }
            ItemInfoTip.show(this._itemInfo);
            this.showTips = true;
         }
         else
         {
            this.showTips = false;
         }
      }
      
      private function onTxtOut(param1:MouseEvent) : void
      {
         this.showTips = false;
      }
      
      public function destroy() : void
      {
         if(this.ui != null)
         {
            this.ui.removeEventListener(TextEvent.LINK,this.onTxtLink);
            this.ui.removeEventListener(MouseEvent.MOUSE_MOVE,this.onTxtMove);
            this.ui.removeEventListener(MouseEvent.ROLL_OUT,this.onTxtOut);
            this.ui = null;
         }
      }
   }
}
