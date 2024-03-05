package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.utils.CommonUI;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class TheSecretOfAnjunshenwu2Controller
   {
      
      private static var _num:int;
      
      private static var _itemArr:Array = [0,0,0,0,0,0];
      
      public static var _map:BaseMapProcess;
       
      
      public function TheSecretOfAnjunshenwu2Controller()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(BitBuffSetClass.getState(23326) == 0)
         {
            BitBuffSetClass.setState(23326,1);
            playSceneAnimation(3);
         }
         else
         {
            getNews();
         }
         MapListenerManager.add(_map.conLevel["npc_1"],onClick);
         MapListenerManager.add(_map.conLevel["npc_2"],onClick);
         MapListenerManager.add(_map.conLevel["npc_3"],onClick);
         _map.conLevel["npc_3"].visible = false;
         _map.conLevel["mc1"].visible = false;
         _map.conLevel["mc2"].visible = false;
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            MapListenerManager.add(_map.conLevel["item_" + _loc2_],onClick);
            _loc2_++;
         }
      }
      
      private static function freshItem() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            if(_itemArr[_loc1_] == 0)
            {
               _map.conLevel["item_" + _loc1_].visible = true;
            }
            else
            {
               _map.conLevel["item_" + _loc1_].visible = false;
            }
            _loc1_++;
         }
      }
      
      private static function getNews() : void
      {
         KTool.getMultiValue([6668],function(param1:Array):void
         {
            _num = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 6)
            {
               if(KTool.getBit(param1[0],_loc2_ + 1) == 1)
               {
                  ++_num;
                  _itemArr[_loc2_] = 1;
               }
               else
               {
                  _itemArr[_loc2_] = 0;
               }
               _loc2_++;
            }
            if(_num >= 6)
            {
               _map.conLevel["mc1"].visible = true;
            }
            freshItem();
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(_loc2_.split("_")[1]);
         _map.topLevel.mouseChildren = false;
         _map.topLevel.mouseEnabled = false;
         switch(_loc2_)
         {
            case "npc_" + _loc3_:
               clickNpc(_loc3_);
               break;
            case "item_" + _loc3_:
               clickItem(_loc3_);
         }
      }
      
      private static function clickNpc(param1:int) : void
      {
         var index:int = param1;
         if(index == 1)
         {
            if(_num >= 6)
            {
               NpcDialogNew_1.show(NPC.DOCTOR,["我知道你们其实找到了一面镜子，但是那个的魔力和这个相比，还是差很远，它应该不仅能够复制，还能够提升被复制物的力量！应该这么说，它是一种，将索伦森和其复制精灵，灵魂缔结的圣物！"],["天啊！"],[function():void
               {
                  NpcDialogNew_1.show(NPC.DOCTOR,["我再给你们演示一下。"],["好的！"],[function():void
                  {
                     playSceneAnimation(4);
                  }]);
               }]);
            }
            else
            {
               NpcDialogNew_1.show(NPC.DOCTOR,["你已经收集到了" + _num + "/6个黑色魔力机械零件，继续吧！"],["嗯。"]);
            }
         }
         else if(index == 2)
         {
            NpcDialogNew_1.show(NPC.SAIXIAOXI,["突然间！我又浑身充满了斗志！"],["加油！"]);
         }
         else
         {
            NpcDialogNew_1.show(NPC.AI_ER_WEN_DA,["击败我！就可以驱散我身上的黑色魔法！快！"],["好！（进入对战）","再等等！"],[function():void
            {
               FightManager.fightNoMapBoss("",8299,false,true,function():void
               {
                  var _loc1_:* = undefined;
                  if(FightManager.isWin)
                  {
                     playSceneAnimation(5);
                  }
                  else
                  {
                     _loc1_ = 0;
                     while(_loc1_ < 6)
                     {
                        _map.conLevel["item_" + _loc1_].visible = false;
                        _loc1_++;
                     }
                     (_map.conLevel["npc_1"] as InteractiveObject).mouseEnabled = false;
                     (_map.conLevel["npc_2"] as InteractiveObject).mouseEnabled = false;
                     _map.conLevel["npc_3"].visible = true;
                     _map.conLevel["mc1"].visible = false;
                     _map.conLevel["mc2"].visible = true;
                  }
               });
            }]);
         }
      }
      
      private static function clickItem(param1:int) : void
      {
         var index:int = param1;
         CommonUI.showProgressBar(_map.topLevel,_map.conLevel["item_" + index].x + 20,_map.conLevel["item_" + index].y - 40,function():void
         {
            SocketConnection.sendWithCallback(43218,function():void
            {
               getNews();
            },index + 1);
         });
      }
      
      private static function playSceneAnimation(param1:int) : void
      {
         var j:int = 0;
         var i:int = param1;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         j = 0;
         while(j < 6)
         {
            _map.conLevel["item_" + j].visible = false;
            j++;
         }
         j = 1;
         while(j <= 3)
         {
            _map.conLevel["npc_" + j].visible = false;
            j++;
         }
         j = 1;
         while(j <= 2)
         {
            _map.conLevel["mc" + j].visible = false;
            j++;
         }
         ResourceManager.getResource(ClientConfig.getMapAnimate("TheSecretOfAnjunshenwuMV"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playMcAnimate(mc,i,"mc" + i,function():void
            {
               mc.parent.removeChild(mc);
               LevelManager.iconLevel.visible = true;
               LevelManager.toolsLevel.visible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               j = 1;
               while(j <= 2)
               {
                  _map.conLevel["npc_" + j].visible = true;
                  _map.conLevel["mc" + j].visible = true;
                  ++j;
               }
               if(i == 3)
               {
                  _map.conLevel["npc_3"].visible = false;
                  _map.conLevel["mc2"].visible = false;
                  NpcDialogNew_1.show(NPC.DOCTOR,["我始终没有办法将它的能力再提升，但也许如果再提升，这个神秘之物，就不是我们能操控的了，所以，权衡之下，我也就停止了继续研究。"],["但是这已经非常了不起了！"],[function():void
                  {
                     NpcDialogNew_1.show(NPC.SEER,["博士！它到底是做什么的？难道也是复制精灵用的吗？"],["不，远没有那么简单！"],[function():void
                     {
                        NpcDialogNew_1.show(NPC.DOCTOR,["你先帮我把刚才复制出来的机械零件收集一下。我要集中销毁。我担心一旦放置久了，他们会影响到整个赛尔号的航行！"],["好的！"],[function():void
                        {
                           getNews();
                        }]);
                     }]);
                  }]);
               }
               if(i == 4)
               {
                  (_map.conLevel["npc_1"] as InteractiveObject).mouseEnabled = false;
                  (_map.conLevel["npc_2"] as InteractiveObject).mouseEnabled = false;
                  _map.conLevel["npc_3"].visible = true;
                  _map.conLevel["mc1"].visible = false;
                  _map.conLevel["mc2"].visible = true;
               }
               if(i == 5)
               {
                  ModuleManager.showAppModule("TheSecretOfAnjunshenwuTaskPanel");
               }
            });
         });
      }
   }
}
