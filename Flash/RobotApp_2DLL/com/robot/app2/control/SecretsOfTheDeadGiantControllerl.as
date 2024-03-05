package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SecretsOfTheDeadGiantControllerl
   {
      
      private static var _map:MapModel;
      
      private static var _cureIndex:int;
      
      private static var _taskMc:MovieClip;
       
      
      private const BUFFERID:uint = 0;
      
      public function SecretsOfTheDeadGiantControllerl()
      {
         super();
      }
      
      public static function initToMap() : void
      {
         initView();
      }
      
      private static function initView() : void
      {
         _map = MapManager.currentMap;
         _map.controlLevel.addEventListener(MouseEvent.CLICK,onMainClick);
         if(_map.id == 11588)
         {
            StatManager.sendStat2014("1222逝者巨樽的秘密","进入永恒之树精华","2017运营活动");
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["huangjinBtn"].x + 120,_map.controlLevel["huangjinBtn"].y - 50,45);
         }
         if(_map.id == 11589)
         {
            StatManager.sendStat2014("1222逝者巨樽的秘密","进入泰坦生命源力","2017运营活动");
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["taitanNpcBtn"].x + 120,_map.controlLevel["taitanNpcBtn"].y - 50,45);
         }
         if(_map.id == 11590)
         {
            StatManager.sendStat2014("1222逝者巨樽的秘密","进入灵核魔杖","2017运营活动");
            CommonUI.addYellowArrow(_map.controlLevel,_map.controlLevel["wangbulaikeBtn"].x + 120,_map.controlLevel["wangbulaikeBtn"].y - 50,45);
         }
         else if(_map.id == 11592)
         {
            playMc(1);
         }
      }
      
      private static function onMainClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.target));
         switch(param1.target.name)
         {
            case "huangjinBtn":
               StatManager.sendStat2014("1222逝者巨樽的秘密","点击闪光史莱姆","2017运营活动");
               playMc(2);
               break;
            case "taitanNpcBtn":
               StatManager.sendStat2014("1222逝者巨樽的秘密","点击泰坦","2017运营活动");
               playMc(3);
               break;
            case "wangbulaikeBtn":
               StatManager.sendStat2014("1222逝者巨樽的秘密","点击王·布莱克","2017运营活动");
               Dialog(4);
         }
      }
      
      private static function Dialog1() : void
      {
         NpcDialog.show(NPC.SHISHENLIEHUANG,["虽然在修罗大殿已经见识了逝者巨樽的厉害，但是想不到这能量如此狂傲，竟让这些性格懦弱的低等生物向我发起了攻击！"],["……"],[function():void
         {
            NpcDialog.show(NPC.SIMOYADISI,["不可小瞧这亡者之能，只要沾染了它就会被瞬间迷失心智…即使现在夺得了逝者巨樽，恐怕一时之间也难以掌握其中的奥秘……"],["这么恐怖！"],[function():void
            {
               NpcDialog.show(NPC.SHISHENLIEHUANG,["现在该怎么破解它呢？"],["哈哈哈哈"],[function():void
               {
                  NpcDialog.show(NPC.SHISHENLIEHUANG,["这冥域法器虽然强大，但是也有压制的办法。我早就想好了对策，只要收集到传说中的永恒之树精华、泰坦生命源力、灵核魔杖、创世之钟，就可以平衡其中的能量"],["主人英明！"],[function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("SecretsOfTheDeadGiantGoToPanel"),"正在打开....");
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function Dialog(param1:int) : void
      {
         var index:int = param1;
         NpcDialog.show(NPC.KING_BULAIKE,["魔灵王！你还敢有脸回魔灵城！我族向来正义！居然出了你这样的叛徒！"],["哈哈哈哈！"],[function():void
         {
            NpcDialog.show(NPC.SIMOYADISI,["我亲爱的好侄儿，脾气见长嘛"],["哼！"],[function():void
            {
               NpcDialog.show(NPC.KING_BULAIKE,["念在你我同承一脉，现在停手还来得及！不然就休怪我大义灭亲了！"],["好大的口气"],[function():void
               {
                  NpcDialog.show(NPC.SIMOYADISI,["你觉得你现在有能力战胜我吗？"],["……"],[function():void
                  {
                     FightManager.tryFight(673,[0,0,0,0],function():void
                     {
                        StatManager.sendStat2014("1222逝者巨樽的秘密","进入挑战王·布莱克","2017运营活动");
                        KTool.getMultiValue([101364],function(param1:Array):void
                        {
                           var va:Array = param1;
                           if(BitUtils.getBit(va[0],2) > 0)
                           {
                              Alarm2.show("已解锁灵核魔杖！",function():void
                              {
                                 MapManager.changeMapWithCallback(1,function():void
                                 {
                                    ModuleManager.showModule(ClientConfig.getAppModule("SecretsOfTheDeadGiantGoToPanel"),"正在打开....");
                                 });
                              });
                           }
                        });
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function playMc(param1:int) : void
      {
         var index:int = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_SecretsOfTheDeadGiant"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            _map.controlLevel.removeChild(taskMc);
            if(index == 1)
            {
               Dialog1();
            }
            else if(index == 2)
            {
               SocketConnection.sendByQueue(42359,[21,1],function():void
               {
                  Alarm2.show("已解锁永恒之树精华！",function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("SecretsOfTheDeadGiantGoToPanel"),"正在打开....");
                     });
                  });
               });
            }
            else if(index == 3)
            {
               FightManager.tryFight(672,[0,0,0,0],function():void
               {
                  StatManager.sendStat2014("1222逝者巨樽的秘密","进入挑战泰坦","2017运营活动");
                  KTool.getMultiValue([101364],function(param1:Array):void
                  {
                     var va:Array = param1;
                     if(BitUtils.getBit(va[0],1) > 0)
                     {
                        Alarm2.show("已解锁泰坦生命源力！",function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              ModuleManager.showModule(ClientConfig.getAppModule("SecretsOfTheDeadGiantGoToPanel"),"正在打开....");
                           });
                        });
                     }
                  });
               });
            }
         };
         storyPlayer.start();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
         CommonUI.removeYellowArrow(_map.controlLevel);
         _map.controlLevel.removeEventListener(MouseEvent.CLICK,onMainClick);
      }
   }
}
