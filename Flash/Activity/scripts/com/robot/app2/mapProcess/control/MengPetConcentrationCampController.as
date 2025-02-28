package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.OgreEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.Dictionary;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MengPetConcentrationCampController
   {
      
      private static var _mc:MovieClip;
      
      private static var _bossId:int;
      
      private static var _bossName:Dictionary = new Dictionary();
      
      private static var _monsters:Array = [2858,2826,2845,2810,2835,2854,2634,2643,2653,2663,2669,2469,2311,2403,2416,2433,2874,2059,1209,38,2211,2050,1112,872,13,35,1253,1269,1273,1386,1617,1652,1704];
      
      private static var _monsterName:Array = [718,717,275,2414,2413,2415,2388,2416,2418,2419,2417,2420,2392,2194,2195,2257,2421,2039,2422,514,2117,2423,2424,1532,1654,515,2425,2426,2427,2428,2429,2430,2431];
      
      private static var _xNy:Array = [{
         "x":265,
         "y":280
      },{
         "x":361,
         "y":393
      },{
         "x":535,
         "y":424
      },{
         "x":694,
         "y":314
      },{
         "x":448,
         "y":278
      }];
      
      private static var _monster:OgreModel;
      
      private static var _tasks:Array = ["螺旋星系的巴斯星\n1.雾气石林\n2.盘树天堂\n3.云层之径(终点)","裂空星系的果然星\n1.草莓乐土\n2.葡萄庄园\n3.蜜桃森林(终点)","螺旋星系的魔神星\n1.魔神陵墓\n2.恶灵深渊\n3.精灵圣坛(终点)","前往帕诺星系\n1.双子阿尔法星\n2.阿尔法星岩地\n3.海盗能源站(终点)","卡兰星系的普罗特星\n1.流芳仙洲\n2.群魔禁地\n3.失落神庙(终点)"];
      
      private static var _taskMap:Array = [721,352,785,46,942];
      
      private static var _taskId:int;
      
      private static var _taskIcon:MovieClip;
      
      private static var _b:Boolean = false;
       
      
      public function MengPetConcentrationCampController()
      {
         super();
      }
      
      public static function initTaskPanel() : void
      {
         KTool.getBitSet([19333],function(param1:Array):void
         {
            var a:Array = param1;
            if(a[0] == 1)
            {
               KTool.getForeverNum(2440,function(param1:int):void
               {
                  var i:int = param1;
                  if(i < 5 && i >= 0)
                  {
                     if(_taskIcon == null)
                     {
                        ResourceManager.getResource(ClientConfig.getUiIcon("MengPetConcentrationCampTask"),function(param1:MovieClip):void
                        {
                           _taskIcon = param1;
                           _taskIcon.x = 70;
                           _taskIcon.y = 124;
                           _taskIcon.addEventListener(MouseEvent.CLICK,inTaskClick);
                           LevelManager.toolsLevel.addChild(_taskIcon);
                           _taskIcon.taskTXt.text = _tasks[i];
                        });
                     }
                     else
                     {
                        _taskIcon.taskTXt.text = _tasks[i];
                     }
                     _taskId = i;
                  }
                  else
                  {
                     destroyIcon();
                  }
               });
            }
         });
      }
      
      protected static function inTaskClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(event.target.name == "closeBtn")
         {
            destroyIcon();
         }
         else if(event.target.name == "goMapBtn")
         {
            KTool.buyProductByCallback(245058,1,function():void
            {
               KTool.doExchange(6332,function():void
               {
                  MapManager.changeMap(_taskMap[_taskId]);
               });
            });
         }
      }
      
      public static function destroyIcon() : void
      {
         if(_taskIcon)
         {
            _taskIcon.removeEventListener(MouseEvent.CLICK,inTaskClick);
            DisplayUtil.removeForParent(_taskIcon);
            _taskIcon.stop();
            _taskIcon = null;
         }
      }
      
      public static function initCopyMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         map.btnLevel.addEventListener(MouseEvent.CLICK,inMapClick,false,0,true);
         if(MainManager.isFighting)
         {
            return;
         }
         SocketConnection.sendWithCallback(47227,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            KTool.getPlayerInfo([545,546,547,548,549],function(param1:Array):void
            {
               var _loc3_:OgreModel = null;
               EventManager.addEventListener(OgreEvent.CLICK_OGRE,onClick);
               var _loc2_:int = 0;
               while(_loc2_ < param1.length)
               {
                  _loc3_ = new OgreModel(_loc2_);
                  _loc3_.show(_monsters[param1[_loc2_] - 1],new Point(_xNy[_loc2_].x,_xNy[_loc2_].y));
                  MapManager.currentMap.depthLevel.addChild(_loc3_);
                  _loc2_++;
               }
            });
         },3);
      }
      
      private static function inMapClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(e.target.name == "leftBtn")
         {
            Alert.show("你确定现在离开派对吗？花皮不会把入场券还给你哦，下次来的话还会再要一张入场券！",function():void
            {
               SocketConnection.send(47227,4);
               MapManager.changeMap(1);
               destroyMc();
            });
         }
      }
      
      private static function onClick(param1:OgreEvent) : void
      {
         _monster = param1.model;
         NpcDialog.show(_monsterName[_monsters.indexOf(_monster.id)],["你要挑战我吗？只要战胜我就能获得我哦！我会在5回合后逃跑，你的挑战机会只有一次哦！"],["我只喜欢你，跟我走吧！","让我再考虑考虑。"],[onFight]);
      }
      
      private static function onFight() : void
      {
         FightManager.fightNoMapBoss("",4957 + _monsters.indexOf(_monster.id),false,true,function():void
         {
            if(FightManager.isWin)
            {
               SocketConnection.send(47227,5);
            }
            destroyMc();
            ModuleManager.showAppModule("MengPetConcentrationCampMainPanel");
         });
      }
      
      private static function destroyMc() : void
      {
         EventManager.removeEventListener(OgreEvent.CLICK_OGRE,onClick);
         var _loc1_:int = int(MapManager.currentMap.depthLevel.numChildren);
         var _loc2_:int = _loc1_ - 1;
         while(_loc2_ >= 0)
         {
            if(MapManager.currentMap.depthLevel.getChildAt(_loc2_) is OgreModel)
            {
               (MapManager.currentMap.depthLevel.getChildAt(_loc2_) as OgreModel).destroy();
               MapManager.currentMap.depthLevel.removeChildAt(_loc2_);
            }
            _loc2_--;
         }
         _monster = null;
      }
      
      public static function showMapObj(param1:BaseMapProcess, param2:int) : void
      {
         switch(param2)
         {
            case 721:
               _bossName[4952] = "乌力朴";
               showBoss(4952,510,350);
               break;
            case 352:
               _bossName[4953] = "花卷卷";
               showBoss(4953,505,290);
               break;
            case 785:
               _bossName[4954] = "米宝";
               showBoss(4954,556,360);
               break;
            case 46:
               _bossName[4955] = "艾蒂森";
               showBoss(4955,420,140);
               break;
            case 942:
               _bossName[4956] = "黄金独角兽";
               showBoss(4956,400,310);
         }
      }
      
      private static function showBoss(param1:int, param2:int, param3:int) : void
      {
         var bossId:int = param1;
         var x:int = param2;
         var y:int = param3;
         _bossId = bossId;
         checkTask();
         ResourceManager.getResource(ClientConfig.getAppRes("mapobj/MengPetConcentrationCamp" + bossId),function(param1:MovieClip):void
         {
            _mc = param1;
            _mc.x = x;
            _mc.y = y;
            _mc.buttonMode = true;
            MapManager.currentMap.depthLevel.addChild(param1);
            _mc.addEventListener(MouseEvent.CLICK,clickHandle);
         });
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         var b:int = 0;
         var event:MouseEvent = param1;
         switch(_bossId)
         {
            case 4952:
               b = int(NPC.WULIPU);
               break;
            case 4953:
               b = int(NPC.HUAJUANJUAN);
               break;
            case 4954:
               b = int(NPC.MIBAO);
               break;
            case 4955:
               b = int(NPC.AIDISEN);
               break;
            case 4956:
               b = int(NPC.HUANGJINGDUJIAOSHOU);
         }
         NpcDialog.show(b,["你好，勇敢的赛尔。"],null,null,false,function():void
         {
            if(_b)
            {
               NpcDialog.show(NPC.SEER,["你好，花皮托我向你表达歉意。最近它比较忙，没能常来跟你聊天。"],null,null,false,function():void
               {
                  NpcDialog.show(b,["你太客气了，谁没有忙的时候呢。"],null,null,false,function():void
                  {
                     NpcDialog.show(b,["我有个不情之请，你能否帮个忙？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SEER,["好的你尽管说，力所能及，在所不辞！"],null,null,false,function():void
                        {
                           NpcDialog.show(b,["我每天在这里好生无聊，你能陪我打上两场，让我活动活动手脚吗？"],["这……好的，来吧！"],[function():void
                           {
                              FightManager.fightNoMapBoss(_bossName[_bossId],_bossId,false,true,function():void
                              {
                                 checkTask();
                                 initTaskPanel();
                                 if(FightManager.isWin)
                                 {
                                    ModuleManager.showAppModule("MengPetConcentrationCampMainPanel");
                                 }
                              });
                           }],false);
                        });
                     });
                  });
               });
            }
         });
      }
      
      private static function checkTask() : void
      {
         KTool.getBitSet([19333],function(param1:Array):void
         {
            var a:Array = param1;
            KTool.getMultiValue([2440],function(param1:Array):void
            {
               _taskId = param1[0];
               if(Boolean(a[0]) && _bossId - 4952 == param1[0])
               {
                  _b = true;
               }
               else
               {
                  _b = false;
               }
            });
         });
      }
      
      public static function destroy() : void
      {
         _mc.removeEventListener(MouseEvent.CLICK,clickHandle);
         _mc.stop();
         DisplayUtil.removeForParent(_mc);
         _mc = null;
         _bossId = 0;
      }
   }
}
