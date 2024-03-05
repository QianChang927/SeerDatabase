package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.component.PlayAnimationComponent;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.utils.CommonUI;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WeisikeTongjiController
   {
      
      private static var _player:PlayAnimationComponent;
      
      private static var _fullMcloader:MCLoader;
      
      private static var _fullMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static var _state:int;
      
      private static var _isFight:Boolean = false;
       
      
      public function WeisikeTongjiController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         if(_player)
         {
            _player.destroy();
            _player = null;
         }
         CommonUI.removeYellowArrow(_map.btnLevel);
         _map.btnLevel["fightBoss"].removeEventListener(MouseEvent.CLICK,onClick);
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         _map = map;
         if(BitBuffSetClass.getState(23253) == 0)
         {
            _player = new PlayAnimationComponent("WeisikeTongji_mapMovie",function():void
            {
               BitBuffSetClass.setState(23253,1);
               _map.btnLevel["fightBoss"].addEventListener(MouseEvent.CLICK,onClick);
               LevelManager.iconLevel.visible = false;
               LevelManager.toolsLevel.visible = false;
               CommonUI.removeYellowArrow(_map.btnLevel);
               CommonUI.addYellowArrow(_map.btnLevel,_map.btnLevel["fightBoss"].x,_map.btnLevel["fightBoss"].y,-30);
            },1,true,"item","mc1",true);
         }
         else
         {
            getState(function(param1:int):void
            {
               if(KTool.getBit(param1,1) == 0)
               {
                  CommonUI.removeYellowArrow(_map.btnLevel);
                  CommonUI.addYellowArrow(_map.btnLevel,_map.btnLevel["fightBoss"].x,_map.btnLevel["fightBoss"].y,-30);
                  _map.btnLevel["fightBoss"].addEventListener(MouseEvent.CLICK,onClick);
               }
               else
               {
                  if(_player == null && !_isFight)
                  {
                     _player = new PlayAnimationComponent("WeisikeTongji_mapMovie",null,1,false);
                  }
                  showNextAnimate();
               }
            });
         }
      }
      
      public static function getState(param1:Function) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([5349],function(param1:Array):void
         {
            _state = param1[0];
            func(_state);
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0902威斯克预热","进入与达克赛德的虚拟对战","2016运营活动");
         NpcDialogNew_1.show(NPC.WEISIKE_SUPER,["达克赛德，你的皇帝回来了！"],["教训达克赛德"],[function():void
         {
            _isFight = true;
            _map.btnLevel["fightBoss"].removeEventListener(MouseEvent.CLICK,onClick);
            FightManager.tryFight(446,[0,0,0,0],function():void
            {
               if(FightManager.isWin)
               {
                  if(_player == null)
                  {
                     _player = new PlayAnimationComponent("WeisikeTongji_mapMovie",null,1,false);
                  }
                  showNextAnimate();
               }
            });
         }]);
      }
      
      private static function loadFullAnimate() : void
      {
         ResourceManager.getResource(ClientConfig.getFullMovie("WeisikeTongji_fullMovie"),function(param1:MovieClip):void
         {
            _fullMc = param1 as MovieClip;
            _fullMc.gotoAndStop(1);
         });
      }
      
      private static function showNextAnimate() : void
      {
         if(_player)
         {
            DisplayUtil.removeAllChild(_map.btnLevel);
            DisplayUtil.removeAllChild(_map.depthLevel);
            _player.backFun = function():void
            {
               loadFullAnimate();
               _player.backFun = function():void
               {
                  var fullBg:Bitmap = null;
                  var data:BitmapData = null;
                  _player.destroy();
                  _player = null;
                  if(MapManager.currentMap != null)
                  {
                     data = new BitmapData(960,560);
                     data.draw(MapManager.currentMap.root);
                     fullBg = new Bitmap(data);
                     LevelManager.stage.addChild(fullBg);
                  }
                  _fullMc.x = 480;
                  _fullMc.y = 278;
                  LevelManager.stage.addChild(_fullMc);
                  SoundManager.stopSoundImmediately();
                  AnimateManager.playMcAnimate(_fullMc,0,"",function():void
                  {
                     SoundManager.playSound();
                     if(fullBg)
                     {
                        DisplayUtil.removeForParent(fullBg);
                        fullBg.bitmapData.dispose();
                        fullBg = null;
                     }
                     if(_fullMc)
                     {
                        DisplayUtil.removeForParent(_fullMc);
                        _fullMc = null;
                     }
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        ModuleManager.showAppModule("WeisikeTongjiPanel",true);
                     });
                  });
               };
               _player.play(3,"mc3",true);
            };
            _player.play(2,"mc2",false);
         }
      }
   }
}
