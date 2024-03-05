package com.robot.core.userHoldParty
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.ui.alert.SimpleAlarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.ui.Mouse;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PlantPartyController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var materialArr:Array = [];
      
      private static const materialNameArr:Array = ["水池","肥料","除草剂","除虫剂"];
      
      private static const mNameArr:Array = ["水","肥料","除草剂","除虫剂"];
      
      private static var curIndex:uint;
      
      private static var timer:Timer;
      
      private static const pointArr:Array = [new Point(-465,80),new Point(-550,210),new Point(65,40),new Point(190,40)];
      
      private static const pointArr2:Array = [new Point(263,350),new Point(230,415),new Point(830,400),new Point(710,330)];
      
      private static const pointArr3:Array = [new Point(335,400),new Point(480,460),new Point(620,400)];
      
      private static var status:uint;
      
      private static var water:uint;
      
      private static var fertilizer:uint;
      
      private static var grass:uint;
      
      private static var worm:uint;
      
      private static var times:uint;
      
      private static var hasSelect:Boolean;
      
      private static var getMaterial:MovieClip;
      
      private static var afterGetMaterialArr:Array = [];
      
      private static const seedName:Array = ["迷之种","迷之芽"];
      
      private static var secretSeed:MovieClip;
      
      private static var grassMC:MovieClip;
      
      private static var wormMC:MovieClip;
      
      private static var tips:MovieClip;
      
      private static var playGrowUp:Boolean;
      
      private static var playFullMovie:Boolean;
      
      private static const fairyIDArr:Array = [799,471,560];
      
      private static const petNameArr:Array = ["潇潇","闪光依依","多特"];
      
      private static var fairyMCArr:Array = [];
       
      
      public function PlantPartyController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         materialArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            materialArr.push(_map.depthLevel["materialPool_" + _loc2_]);
            _loc2_++;
         }
         getMaterial = _map.depthLevel.removeChild(_map.depthLevel["getMaterialStatus"]) as MovieClip;
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            afterGetMaterialArr.push(_map.conLevel.removeChild(getAction(_loc3_)));
            _loc3_++;
         }
         tips = _map.depthLevel.removeChild(_map.depthLevel["tipMC"]) as MovieClip;
         secretSeed = _map.depthLevel["secretSeed"];
         grassMC = _map.depthLevel["grass"];
         wormMC = _map.depthLevel["worm"];
         fairyMCArr = [];
         var _loc4_:int = 1;
         while(_loc4_ < 4)
         {
            fairyMCArr.push(_map.depthLevel["fairy_" + _loc4_]);
            _loc4_++;
         }
         var _loc5_:int = 1;
         while(_loc5_ < 4)
         {
            (fairyMCArr[_loc5_ - 1] as MovieClip).visible = false;
            _loc5_++;
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_GET_SEED_STATE,onGetSeedStatusNotice);
         SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_GIVE_GIFT_COUPON_NOTI,onGainCoupon);
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
         onActivityTime(null);
      }
      
      private static function getAction(param1:int) : MovieClip
      {
         return _map.conLevel["action_" + param1];
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.hoursUTC + 8 == PartyMapManager.curHour)
         {
            SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_GET_SEED_STATE,onGetSeedStatusNotice);
            SocketConnection.send(CommandID.MAZHELUN_PARTY_GET_SEED_STATE);
         }
         else
         {
            MapManager.changeMap(7);
         }
      }
      
      private static function onGetSeedStatusNotice(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:int = 1;
         while(_loc2_ < 4)
         {
            (fairyMCArr[_loc2_ - 1] as MovieClip).visible = false;
            (_map.btnLevel["fairy_" + _loc2_] as MovieClip).buttonMode = false;
            (_map.btnLevel["fairy_" + _loc2_] as MovieClip).removeEventListener(MouseEvent.CLICK,fightWithFairy);
            _loc2_++;
         }
         var _loc3_:ByteArray = param1.data as ByteArray;
         status = _loc3_.readUnsignedByte();
         water = _loc3_.readUnsignedByte();
         fertilizer = _loc3_.readUnsignedByte();
         grass = _loc3_.readUnsignedByte();
         worm = _loc3_.readUnsignedByte();
         DebugTrace.show("植物派对：" + "种子的状态--" + status + ";" + "水量--" + water + ";" + "肥料量--" + fertilizer + ";" + "草量--" + grass + ";" + "虫量--" + worm);
         var _loc4_:int = 0;
         while(_loc4_ < 4)
         {
            (materialArr[_loc4_] as MovieClip).buttonMode = true;
            (materialArr[_loc4_] as MovieClip).addEventListener(MouseEvent.CLICK,onGetMaterial);
            ToolTipManager.add(materialArr[_loc4_],materialNameArr[_loc4_]);
            _loc4_++;
         }
         secretSeed.visible = true;
         secretSeed.buttonMode = true;
         secretSeed.addEventListener(MouseEvent.MOUSE_OVER,onMouseOver);
         secretSeed.addEventListener(MouseEvent.MOUSE_OUT,onMouseOut);
         secretSeed.addEventListener(MouseEvent.CLICK,onAction);
         if(status == 0)
         {
            secretSeed.gotoAndStop(1);
         }
         else if(status == 1)
         {
            secretSeed.gotoAndStop(3);
         }
         else if(status == 2)
         {
            secretSeed.gotoAndStop(4);
            _loc5_ = Math.floor(Math.random() * 3);
            (fairyMCArr[_loc5_] as MovieClip).visible = true;
            (_map.btnLevel["fairy_" + (_loc5_ + 1)] as MovieClip).buttonMode = true;
            (_map.btnLevel["fairy_" + (_loc5_ + 1)] as MovieClip).addEventListener(MouseEvent.CLICK,fightWithFairy);
         }
         else if(status == 3)
         {
            secretSeed.gotoAndStop(5);
         }
         grassMC.visible = false;
         grassMC.buttonMode = false;
         wormMC.visible = false;
         wormMC.buttonMode = false;
         showGrassOrWorm(grass,worm);
      }
      
      private static function fightWithFairy(param1:MouseEvent) : void
      {
         var region:int = 0;
         var e:MouseEvent = param1;
         var str:MovieClip = e.currentTarget as MovieClip;
         region = int(str.name.split("_")[1]);
         MainManager.actorModel.moveAndAction(pointArr3[region],function():void
         {
            SocketConnection.send(CommandID.USER_PARTY_FIGHT_WITH_BOSS,region + 16);
         });
      }
      
      private static function onGetMaterial(param1:MouseEvent) : void
      {
         var date:Date;
         var str:String = null;
         var event:MouseEvent = param1;
         curIndex = (event.currentTarget as MovieClip).name.split("_")[1];
         Mouse.show();
         date = SystemTimerManager.sysDate;
         if(date.hours == PartyMapManager.curHour)
         {
            MainManager.actorModel.moveAndAction(pointArr2[curIndex],function():void
            {
               var p:Point = null;
               var i:int = 0;
               while(i < 4)
               {
                  if((afterGetMaterialArr[i] as MovieClip).parent == LevelManager.stage)
                  {
                     DisplayUtil.removeForParent(afterGetMaterialArr[i]);
                  }
                  i++;
               }
               if(curIndex == 2 && grass == 0)
               {
                  SimpleAlarm.show("现在没有杂草哦！不用取除草剂啦！");
                  return;
               }
               if(curIndex == 3 && worm == 0)
               {
                  SimpleAlarm.show("现在没有虫子哦！不用取除虫剂啦！");
                  return;
               }
               if(curIndex == 0 || curIndex == 1)
               {
                  if(grass != 0)
                  {
                     SimpleAlarm.show("现在杂草丛生，快点拿点除草剂来除草吧！");
                     return;
                  }
                  if(worm != 0)
                  {
                     SimpleAlarm.show(seedName[status] + "正在遭受虫害哦，快点拿点除虫剂来除虫吧！");
                     return;
                  }
               }
               if(status == 2 || status == 3)
               {
                  SimpleAlarm.show("迷之种已经成熟了哦！稍稍等候哦！");
                  return;
               }
               hasSelect = true;
               LevelManager.stage.addChild(getMaterial);
               p = getMaterial.parent.globalToLocal(pointArr[curIndex]);
               getMaterial.x = p.x;
               getMaterial.y = p.y;
               AnimateManager.playMcAnimate(getMaterial,curIndex + 1,"mc" + (curIndex + 1),function():void
               {
                  DisplayUtil.removeForParent(getMaterial);
                  times = 5;
                  LevelManager.stage.addChild(afterGetMaterialArr[curIndex]);
               });
            });
         }
         else
         {
            str = "<b>赛尔绿色植树派对在每天晚上的<font color=\'#ff0000\'>20:00-21:00</font>开展哦，到时候一定要一起来参加哦！</b>";
            SimpleAlarm.show(str);
         }
      }
      
      private static function onMouseMove(param1:MouseEvent) : void
      {
         if((afterGetMaterialArr[curIndex] as MovieClip).parent == LevelManager.stage)
         {
            Mouse.hide();
            (afterGetMaterialArr[curIndex] as MovieClip).mouseChildren = false;
            (afterGetMaterialArr[curIndex] as MovieClip).mouseEnabled = false;
            (afterGetMaterialArr[curIndex] as MovieClip).x = LevelManager.stage.mouseX;
            (afterGetMaterialArr[curIndex] as MovieClip).y = LevelManager.stage.mouseY;
         }
      }
      
      private static function onAction(param1:MouseEvent) : void
      {
         var emotionStr:String = null;
         var event:MouseEvent = param1;
         if(status == 0 || status == 1)
         {
            if(hasSelect)
            {
               if(times > 0)
               {
                  emotionStr = "$" + (curIndex + 23);
                  MainManager.actorModel.execBehavior(new ChatBehavior(emotionStr));
                  LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
                  AnimateManager.playMcAnimate(afterGetMaterialArr[curIndex],1,"mc1",function():void
                  {
                     LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
                     --times;
                     if(curIndex == 0 || curIndex == 1)
                     {
                        SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_GIVE_WATER_FERTILIZER,onWateringAndFertilizer);
                        SocketConnection.send(CommandID.MAZHELUN_PARTY_GIVE_WATER_FERTILIZER,curIndex);
                     }
                     else if(curIndex == 2 || curIndex == 3)
                     {
                        SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_REMOVE_GRASS_WORM,afterRemoveGrassAndWorm);
                        SocketConnection.send(CommandID.MAZHELUN_PARTY_REMOVE_GRASS_WORM,curIndex - 2);
                     }
                  });
               }
               else
               {
                  removeMouseState();
                  hasSelect = false;
                  SimpleAlarm.show(mNameArr[curIndex] + "不足哦！快去取" + mNameArr[curIndex] + "吧！");
               }
            }
            else if(status == 0 || status == 1)
            {
               if(grass != 0)
               {
                  SimpleAlarm.show("现在杂草丛生，快点拿点除草剂来除草吧！");
               }
               else if(worm != 0)
               {
                  SimpleAlarm.show(seedName[status] + "正在遭受虫害哦，快点拿点除虫剂来除虫吧！");
               }
               else
               {
                  SimpleAlarm.show("快去取水或者肥料来培育迷之种吧！");
               }
            }
         }
         else if(status == 2)
         {
            removeMouseState();
            SocketConnection.addCmdListener(CommandID.MAZHELUN_PARTY_GAIN_SEEDS,onGainSeeds);
            SocketConnection.send(CommandID.MAZHELUN_PARTY_GAIN_SEEDS);
         }
         else if(status == 3)
         {
            removeMouseState();
            NpcDialog.show(NPC.KELI,["咦，是你一直在帮助我成长吗？希望我们能成为好伙伴。"],null,null,false,function():void
            {
               SocketConnection.send(CommandID.USER_PARTY_FIGHT_WITH_BOSS,15);
            });
         }
      }
      
      private static function onGainSeeds(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            ItemInBagAlert.show(_loc5_,"1个" + ItemXMLInfo.getName(_loc5_) + "已经放入你的储物箱！");
            _loc4_++;
         }
      }
      
      private static function onGainCoupon(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var give_water_times:uint = data.readUnsignedByte();
         var give_fertilizer_times:uint = data.readUnsignedByte();
         var remove_grass_times:uint = data.readUnsignedByte();
         var remove_worm_times:uint = data.readUnsignedByte();
         if(give_water_times == 20 || give_fertilizer_times == 20)
         {
            NpcDialog.show(NPC.MAIZHELUN,["你的表现很不错哦！这些派对礼券就送给你吧！"],["太感谢了！"],[function():void
            {
               ItemInBagAlert.show(400944,"5个" + ItemXMLInfo.getName(400944) + "已经放入你的储物箱！");
            }]);
         }
         if(remove_grass_times == 5)
         {
            NpcDialog.show(NPC.MAIZHELUN,["在你的帮助下杂草少了很多！作为感谢，这些派对礼券就送给你吧，一定要继续加油哦！"],["谢谢，这是我应该做的！"],[function():void
            {
               ItemInBagAlert.show(400944,"5个" + ItemXMLInfo.getName(400944) + "已经放入你的储物箱！");
            }]);
         }
         if(remove_worm_times == 5)
         {
            NpcDialog.show(NPC.MAIZHELUN,["在你的帮助下害虫少了很多！作为感谢，这些派对礼券就送给你吧，一定要继续加油哦！"],["谢谢，这是我应该做的！"],[function():void
            {
               ItemInBagAlert.show(400944,"5个" + ItemXMLInfo.getName(400944) + "已经放入你的储物箱！");
            }]);
         }
      }
      
      private static function onMouseOver(param1:MouseEvent) : void
      {
         showTip(status,water,fertilizer);
      }
      
      private static function onMouseOut(param1:MouseEvent) : void
      {
         if(tips.parent == LevelManager.stage)
         {
            DisplayUtil.removeForParent(tips);
         }
      }
      
      private static function onWateringAndFertilizer(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var index:uint = 0;
         var e:SocketEvent = param1;
         var l:int = 1;
         while(l < 4)
         {
            (fairyMCArr[l - 1] as MovieClip).visible = false;
            (_map.btnLevel["fairy_" + l] as MovieClip).buttonMode = false;
            (_map.btnLevel["fairy_" + l] as MovieClip).removeEventListener(MouseEvent.CLICK,fightWithFairy);
            l++;
         }
         data = e.data as ByteArray;
         status = data.readUnsignedByte();
         water = data.readUnsignedByte();
         fertilizer = data.readUnsignedByte();
         grass = data.readUnsignedByte();
         worm = data.readUnsignedByte();
         DebugTrace.show("植物派对：" + "种子的状态--" + status + ";" + "水量--" + water + ";" + "肥料量--" + fertilizer + ";" + "草量--" + grass + ";" + "虫量--" + worm);
         if(status == 0)
         {
            secretSeed.gotoAndStop(1);
            playGrowUp = true;
            playFullMovie = true;
            if(curIndex == 0 || curIndex == 1)
            {
               if(grass != 0)
               {
                  removeMouseState();
                  SimpleAlarm.show("现在杂草丛生哦，快点拿点除草剂来除草吧！");
                  hasSelect = false;
               }
               if(worm != 0)
               {
                  removeMouseState();
                  SimpleAlarm.show("迷之种正在遭受虫害哦，快点拿点除虫剂来除虫吧！");
                  hasSelect = false;
               }
            }
         }
         else if(status == 1)
         {
            if(playGrowUp)
            {
               AnimateManager.playMcAnimate(secretSeed,2,"growUp",function():void
               {
                  playGrowUp = false;
                  secretSeed.gotoAndStop(3);
                  if(curIndex == 0 || curIndex == 1)
                  {
                     if(grass != 0)
                     {
                        removeMouseState();
                        SimpleAlarm.show("现在杂草丛生哦，快点拿点除草剂来除草吧！");
                        hasSelect = false;
                     }
                     if(worm != 0)
                     {
                        removeMouseState();
                        SimpleAlarm.show("迷之芽正在遭受虫害哦，快点拿点除虫剂来除虫吧！");
                        hasSelect = false;
                     }
                  }
               });
            }
            else
            {
               secretSeed.gotoAndStop(3);
               if(curIndex == 0 || curIndex == 1)
               {
                  if(grass != 0)
                  {
                     removeMouseState();
                     SimpleAlarm.show("现在杂草丛生哦，快点拿点除草剂来除草吧！");
                     hasSelect = false;
                  }
                  if(worm != 0)
                  {
                     removeMouseState();
                     SimpleAlarm.show("迷之芽正在遭受虫害哦，快点拿点除虫剂来除虫吧！");
                     hasSelect = false;
                  }
               }
            }
         }
         else if(status == 2)
         {
            removeMouseState();
            secretSeed.gotoAndStop(4);
            index = Math.floor(Math.random() * 3);
            (fairyMCArr[index] as MovieClip).visible = true;
            (_map.btnLevel["fairy_" + (index + 1)] as MovieClip).buttonMode = true;
            (_map.btnLevel["fairy_" + (index + 1)] as MovieClip).addEventListener(MouseEvent.CLICK,fightWithFairy);
         }
         else if(status == 3)
         {
            removeMouseState();
            if(playFullMovie)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_947_1"),function():void
               {
                  playFullMovie = false;
                  secretSeed.gotoAndStop(5);
               });
            }
            else
            {
               secretSeed.gotoAndStop(5);
            }
         }
         grassMC.visible = false;
         wormMC.visible = false;
         showGrassOrWorm(grass,worm);
      }
      
      private static function showTip(param1:uint, param2:uint, param3:uint) : void
      {
         if(param1 == 0 || param1 == 1)
         {
            (tips["seedName"] as TextField).text = seedName[param1];
            switch(param1)
            {
               case 0:
                  break;
               case 1:
                  param2 -= 100;
                  param3 -= 100;
            }
            if(param2 < 100)
            {
               (tips["waterNum"] as MovieClip).gotoAndStop(uint(param2 / 10) + 1);
            }
            else
            {
               (tips["waterNum"] as MovieClip).gotoAndStop(10);
            }
            if(param3 < 100)
            {
               (tips["fertilizerNum"] as MovieClip).gotoAndStop(uint(param3 / 10) + 1);
            }
            else
            {
               (tips["fertilizerNum"] as MovieClip).gotoAndStop(10);
            }
            tips.x = LevelManager.stage.mouseX + 40;
            tips.y = LevelManager.stage.mouseY;
            LevelManager.stage.addChild(tips);
         }
      }
      
      private static function showGrassOrWorm(param1:uint, param2:uint) : void
      {
         if(param1 != 0)
         {
            if(param1 <= 15)
            {
               grassMC.gotoAndStop(1);
            }
            else if(param1 > 15 && param1 <= 30)
            {
               grassMC.gotoAndStop(2);
            }
            else if(param1 > 30 && param1 <= 45)
            {
               grassMC.gotoAndStop(3);
            }
            else if(param1 > 45 && param1 <= 60)
            {
               grassMC.gotoAndStop(4);
            }
            grassMC.visible = true;
         }
         if(param2 != 0)
         {
            if(param2 <= 15)
            {
               wormMC.gotoAndStop(1);
            }
            else if(param2 > 15 && param2 <= 30)
            {
               wormMC.gotoAndStop(2);
            }
            else if(param2 > 30 && param2 <= 45)
            {
               wormMC.gotoAndStop(3);
            }
            else if(param2 > 45 && param2 <= 60)
            {
               wormMC.gotoAndStop(4);
            }
            wormMC.visible = true;
         }
      }
      
      private static function afterRemoveGrassAndWorm(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         grass = _loc2_.readUnsignedByte();
         worm = _loc2_.readUnsignedByte();
         DebugTrace.show("植物派对：" + "种子的状态--" + status + ";" + "水量--" + water + ";" + "肥料量--" + fertilizer + ";" + "草量--" + grass + ";" + "虫量--" + worm);
         grassMC.visible = false;
         wormMC.visible = false;
         showGrassOrWorm(grass,worm);
         if(curIndex == 2)
         {
            if(grass == 0)
            {
               removeMouseState();
               SimpleAlarm.show("杂草除尽了哦！可以浇水施肥啦！");
               hasSelect = false;
            }
         }
         if(curIndex == 3)
         {
            if(worm == 0)
            {
               removeMouseState();
               SimpleAlarm.show("害虫除尽了哦！可以浇水施肥啦！");
               hasSelect = false;
            }
         }
      }
      
      private static function removeMouseState() : void
      {
         Mouse.show();
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            if((afterGetMaterialArr[_loc1_] as MovieClip).parent == LevelManager.stage)
            {
               DisplayUtil.removeForParent(afterGetMaterialArr[_loc1_]);
            }
            _loc1_++;
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
         if(timer)
         {
            timer.stop();
         }
         hasSelect = false;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
         SocketConnection.removeCmdListener(CommandID.MAZHELUN_PARTY_GET_SEED_STATE,onGetSeedStatusNotice);
         SocketConnection.removeCmdListener(CommandID.MAZHELUN_PARTY_GIVE_GIFT_COUPON_NOTI,onGainCoupon);
         SocketConnection.removeCmdListener(CommandID.MAZHELUN_PARTY_GIVE_WATER_FERTILIZER,onWateringAndFertilizer);
         SocketConnection.removeCmdListener(CommandID.MAZHELUN_PARTY_GAIN_SEEDS,onGainSeeds);
         SocketConnection.removeCmdListener(CommandID.MAZHELUN_PARTY_REMOVE_GRASS_WORM,afterRemoveGrassAndWorm);
         removeMouseState();
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
      }
   }
}
