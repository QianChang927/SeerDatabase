package com.robot.app.buyItem
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.IconAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class HeadquartersAction
   {
       
      
      public function HeadquartersAction()
      {
         super();
      }
      
      public static function buyItem(param1:uint, param2:Boolean = true, param3:uint = 1) : void
      {
         var price:uint;
         var name:String;
         var str:String = null;
         var id:uint = param1;
         var isTip:Boolean = param2;
         var count:uint = param3;
         if(ItemXMLInfo.getVipOnly(id))
         {
            if(!MainManager.actorInfo.vip)
            {
               Alert.show("必须拥有" + TextFormatUtil.getRedTxt("超能NONO") + "才能购买这个装备！想立刻开通吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
               return;
            }
         }
         if(!isTip)
         {
            SocketConnection.send(CommandID.HEAD_BUY,id,count);
            return;
         }
         price = uint(ItemXMLInfo.getPrice(id));
         name = String(ItemXMLInfo.getName(id));
         if(price > 0)
         {
            if(MainManager.isRoomHalfDay)
            {
               str = "<font color=\'#ff0000\'>" + name + "</font>需要花费" + price.toString() + "赛尔豆，<font color=\'#ff0000\'>（半价日只需要花费" + price / 2 + "赛尔豆）</font>，要确定购买吗？";
            }
            else
            {
               str = "<font color=\'#ff0000\'>" + name + "</font>需要花费" + price.toString() + "赛尔豆，" + "你现在拥有" + MainManager.actorInfo.coins + "赛尔豆，要确定购买吗？";
            }
         }
         else
         {
            str = "<font color=\'#ff0000\'>" + name + "</font>免费赠送，你确定现在就要领取吗？";
         }
         IconAlert.show(str,id,function():void
         {
            SocketConnection.send(CommandID.HEAD_BUY,id,count);
         });
      }
      
      public static function buySinItem(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.ITEM_BUY,param1,param2);
      }
      
      public static function exchangeSinItem(param1:uint, param2:uint) : void
      {
         var type:uint = param1;
         var need:uint = param2;
         if(MainManager.actorInfo.fightBadge < need)
         {
            Alert.show("你的战斗徽章数不够!");
            return;
         }
         Alert.show("你确定要兑换吗?",function():void
         {
            KTool.doExchange(type);
         });
      }
      
      public static function exchangePetPaper(param1:uint, param2:uint) : void
      {
         var type:uint = param1;
         var need:uint = param2;
         Alert.show("你确定要兑换吗?",function():void
         {
            KTool.doExchange(type);
         });
      }
      
      public static function exchangePet1(param1:uint, param2:uint, param3:uint) : void
      {
         var type:uint = param1;
         var need0:uint = param2;
         var need1:uint = param3;
         var f:uint = uint(MainManager.actorInfo.fightBadge);
         if(MainManager.actorInfo.fightBadge1 < need0 || MainManager.actorInfo.fightBadge1 < need1)
         {
            Alert.show("你的战斗徽章数不够!");
            return;
         }
         Alert.show("你确定要兑换吗?",function():void
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_PET_COMPLETE,onExtPetHandler);
            SocketConnection.send(CommandID.EXCHANGE_PET_COMPLETE,type);
         });
      }
      
      public static function exchangePet(param1:uint, param2:uint) : void
      {
         var type:uint = param1;
         var need:uint = param2;
         var f:uint = uint(MainManager.actorInfo.fightBadge);
         if(MainManager.actorInfo.fightBadge < need)
         {
            Alert.show("你的战斗徽章数不够!");
            return;
         }
         Alert.show("你确定要兑换吗?",function():void
         {
            SocketConnection.addCmdListener(CommandID.EXCHANGE_PET_COMPLETE,onExtPetHandler);
            SocketConnection.send(CommandID.EXCHANGE_PET_COMPLETE,type);
         });
      }
      
      private static function onExtPetHandler(param1:SocketEvent) : void
      {
         var _loc5_:String = null;
         var _loc6_:uint = 0;
         var _loc7_:int = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         var _loc10_:String = null;
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_PET_COMPLETE,onExtPetHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         MainManager.actorInfo.fightBadge = _loc2_.readUnsignedInt();
         MainManager.actorInfo.fightBadge1 = _loc2_.readUnsignedInt();
         MainManager.actorInfo.fightPkBadge = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ != 0)
         {
            _loc5_ = String(PetXMLInfo.getName(_loc3_));
            Alarm.show("一个" + TextFormatUtil.getRedTxt(_loc5_) + "作为奖励已经放入你的精灵仓库！");
            PetManager.addStorage(_loc3_,_loc4_);
         }
         else
         {
            _loc6_ = _loc2_.readUnsignedInt();
            _loc7_ = 0;
            while(_loc7_ < _loc6_)
            {
               _loc8_ = _loc2_.readUnsignedInt();
               _loc9_ = _loc2_.readUnsignedInt();
               _loc10_ = String(ItemXMLInfo.getName(_loc8_));
               Alarm.show(_loc9_.toString() + "个" + TextFormatUtil.getRedTxt(_loc10_) + "作为奖励已经放入你的背包！");
               _loc7_++;
            }
         }
      }
   }
}
