package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.GamePlatformManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class GameOverCmdListener extends BaseBean
   {
       
      
      private var arrayItem:Array;
      
      private var index:uint = 0;
      
      public function GameOverCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.GAME_OVER,this.gameOverHander);
         SocketConnection.addCmdListener(CommandID.FOOLISH_GAME_OVER,this.gameOverHander);
         finish();
      }
      
      private function gameOverHander(param1:SocketEvent) : void
      {
         var _loc9_:uint = 0;
         var _loc10_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         NonoManager.info.iq += _loc4_;
         NonoManager.info.power += _loc5_;
         NonoManager.info.mate += _loc6_;
         var _loc7_:uint = _loc2_.readUnsignedInt();
         this.arrayItem = new Array();
         var _loc8_:int = 0;
         while(_loc8_ < _loc7_)
         {
            _loc9_ = _loc2_.readUnsignedInt();
            _loc10_ = _loc2_.readUnsignedInt();
            this.arrayItem.push([_loc9_,_loc10_]);
            _loc8_++;
         }
         if(this.arrayItem.length > 0)
         {
            this.getItem(this.arrayItem[this.index]);
         }
         GamePlatformManager.dispatchEvent(new Event(GamePlatformManager.GAME_OVER));
         SoundManager.playSound();
      }
      
      private function getItem(param1:Array) : void
      {
         var id:uint;
         var count:uint;
         var name:String;
         var t:uint = 0;
         var arr:Array = param1;
         if(arr == null)
         {
            return;
         }
         id = uint(arr[0]);
         count = uint(arr[1]);
         name = String(ItemXMLInfo.getName(id));
         if(id == 1)
         {
            MainManager.actorInfo.coins += count;
            Alarm.show("在本次游戏中，你获得了" + count + "赛尔豆！",function():void
            {
               ++index;
               if(index < arrayItem.length)
               {
                  getItem(arrayItem[index]);
               }
               if(index == arrayItem.length)
               {
                  index = 0;
               }
            });
         }
         else if(id == 3)
         {
            Alarm.show("在本次游戏中，你获得了" + count + "点" + TextFormatUtil.getRedTxt("积累经验！"),function():void
            {
               ++index;
               if(index < arrayItem.length)
               {
                  getItem(arrayItem[index]);
               }
               if(index == arrayItem.length)
               {
                  index = 0;
               }
            });
         }
         else if(id == 500628)
         {
            t = setTimeout(function():void
            {
               clearTimeout(t);
               NpcDialog.show(NPC.SUPERNONO,["报告主人，" + MainManager.actorModel.nono.info.nick + "发现了一个超能传送装置哦！只要你把它放置在基地里，其他小赛尔们就可以轻松的进入塔防内部第二层咯！"],["哇哦哦！太棒啦！"]);
            },1000);
         }
         else if(count > 0)
         {
            ItemInBagAlert.show(id,"在本次游戏中，你获得了" + count + "个<font color=\'#FF0000\'>" + name + "</font>！",function():void
            {
               ++index;
               if(index < arrayItem.length)
               {
                  getItem(arrayItem[index]);
               }
               if(index == arrayItem.length)
               {
                  index = 0;
               }
            });
         }
      }
   }
}
