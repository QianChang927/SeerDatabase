package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.utils.BitUtil;
   
   public class GiftBoxCollectController
   {
      
      private static const GOS:Array = [{
         "map":11145,
         "pet":3045,
         "npc":NPC.SIXSTATESGODSKING,
         "name":"六界神王",
         "gift":"你只需要完成我的考验，就可以获得赛尔豆x300000的礼盒奖励了",
         "require":"我的要求是：0xff0000必须使用先制技能击败我的分身。0xffffff",
         "fail":"切记，0xff0000必须使用先制技能击败我的分身哦！0xffffff"
      },{
         "map":11146,
         "pet":3036,
         "npc":NPC.QIAOTELUDE,
         "name":"乔特鲁德",
         "gift":"你只需要完成我的考验，就可以获得一万经验券x15的礼盒奖励了",
         "require":"我的要求是：0xff0000只出战一只精灵并击败我的分身。0xffffff",
         "fail":"切记，0xff0000必须只出战一只精灵并击败我的分身哦！0xffffff"
      },{
         "map":11147,
         "pet":125,
         "npc":NPC.SAGELUOSI,
         "name":"萨格罗斯",
         "gift":"你只需要完成我的考验，就可以获得泰坦之灵x10000的礼盒奖励了",
         "require":"我的要求是：0xff0000在强化状态下击败我的分身。0xffffff",
         "fail":"切记，0xff0000必须在强化状态下击败我的分身哦！0xffffff"
      },{
         "map":11148,
         "pet":3046,
         "npc":NPC.ZHALONG_HAMOLEITE,
         "name":"战龙•哈莫雷特",
         "gift":"你只需要完成我的考验，就可以获得低阶梦幻宝石x3，中阶梦幻宝石x1的礼盒奖励了",
         "require":"我的要求是：0xff0000必须使用必中技能击败我的分身。0xffffff",
         "fail":"切记，0xff0000必须使用必中技能击败我的分身哦！0xffffff"
      },{
         "map":11149,
         "pet":3037,
         "npc":NPC.HUANIAN_LEIXIAOYI,
         "name":"华年•雷小伊",
         "gift":"你只需要完成我的考验，就可以获得特级体力药剂x10，超级活力药剂x10，王牌体力药剂Ωx5的礼盒奖励了",
         "require":"我没有特殊的要求哦！",
         "fail":"切记，整顿整顿，再尝试一下吧！"
      },{
         "map":11150,
         "pet":2987,
         "npc":NPC.RENEWWING,
         "name":"重生之翼",
         "gift":"你只需要完成我的考验，就可以获得精灵还原药剂Ωx2，天赋改造药剂Ωx1，性格重塑胶囊Ωx1的礼盒奖励了",
         "require":"我没有特殊的要求哦！",
         "fail":"切记，整顿整顿，再尝试一下吧！"
      }];
       
      
      public function GiftBoxCollectController()
      {
         super();
      }
      
      public static function go(param1:int) : void
      {
         var obj:Object = null;
         var _haveGift:Boolean = false;
         var _pet:SimpleButton = null;
         var _haveWin:Boolean = false;
         var updateGift:Function = null;
         var onSwitch:Function = null;
         var onClick:Function = null;
         var onFightOver:Function = null;
         var index:int = param1;
         var initMap:Function = function():void
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitch);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            updateMap();
         };
         var updateMap:Function = function():void
         {
            initPet();
            updateGift();
         };
         var initPet:Function = function():void
         {
            _pet = MapManager.currentMap.depthLevel["pet"];
            _pet.addEventListener(MouseEvent.CLICK,onClick);
         };
         updateGift = function(param1:* = null, param2:Function = null):void
         {
            var e:* = param1;
            var func:Function = param2;
            KTool.getMultiValue([3816],function(param1:Array):void
            {
               _haveGift = BitUtil.getBit(param1[0],13 - 1 + index) > 0;
               _haveWin = BitUtil.getBit(param1[0],7 - 1 + index) > 0;
               if(func != null)
               {
                  func();
               }
            });
         };
         onSwitch = function(param1:MapEvent):void
         {
            if(MapManager.currentMap.id != obj.map)
            {
               destroyMap();
            }
            else
            {
               updateMap();
            }
         };
         onClick = function(param1:MouseEvent):void
         {
            var e:MouseEvent = param1;
            if(_haveGift)
            {
               ModuleManager.showAppModule("GiftBoxCollectMainPanel");
               return;
            }
            NpcDialogNew_1.show(obj.npc,["哈哈，你果然是一个聪明的小赛尔！接下来，0xff0000" + obj.gift + "0xffff！"],["新年快乐！快告诉我考验内容吧！"],[function():void
            {
               NpcDialogNew_1.show(obj.npc,["我的考验很简单，如果你能按照要求击败我的分身，我就算你通过了！" + obj.require + "你准备好了吗，小赛尔？"],["我准备好了！（战斗）","让我再准备一下。"],[function():void
               {
                  StatManager.sendStat2014("0212新年礼盒大收集","开始挑战使者" + (index + 1),"2016运营活动");
                  FightManager.fightNoMapBoss("",6519 + index);
               }]);
            }]);
         };
         onFightOver = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            updateGift(null,function():void
            {
               if(_haveWin)
               {
                  NpcDialogNew_1.show(obj.npc,["你果然很强！这是我的礼盒，快拿去吧！"],["谢谢您！"],[function():void
                  {
                     SocketConnection.sendWithCallback(45620,updateGift,3,3,1 + index);
                  }]);
               }
               else
               {
                  NpcDialogNew_1.show(obj.npc,["挑战失败了，小赛尔。" + obj.fail],["我还想再试一次！（战斗）","让我再准备一下。"],[function():void
                  {
                     StatManager.sendStat2014("0212新年礼盒大收集","开始挑战使者" + (index + 1),"2016运营活动");
                     FightManager.fightNoMapBoss("",6519 + index);
                  }]);
               }
            });
            initPet();
         };
         var destroyMap:Function = function():void
         {
            if(_pet)
            {
               _pet.removeEventListener(MouseEvent.CLICK,onClick);
            }
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitch);
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         };
         obj = GOS[index];
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == obj.map)
         {
            return;
         }
         KTool.changeMapWithCallBack(obj.map,function():void
         {
            initMap();
         });
      }
   }
}
