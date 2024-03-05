package com.robot.app.mapProcess.control
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.group.fightInfo.fightOver.GroupFightOverInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.Direction;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class GroupGhaziTowerCtrl
   {
      
      public static var _arg:int = 0;
      
      private static var gpGhaziTowerCtrl:com.robot.app.mapProcess.control.GroupGhaziTowerCtrl;
       
      
      private var _fgPetList:Array;
      
      private var _pList:Array;
      
      private var _stopFun:Function;
      
      private var _map:BaseMapProcess;
      
      private var _petMCList:Array;
      
      private var _level:uint;
      
      private var _isBossLv:Boolean = false;
      
      private var _levelMC:MovieClip;
      
      private var _rewardBoxPanel:MovieClip;
      
      private var _isBossLvl:Boolean = false;
      
      private var _lvlExpList:Array;
      
      private var _pointList:Array;
      
      private var _exp:uint;
      
      private var _curtBox:MovieClip;
      
      public function GroupGhaziTowerCtrl()
      {
         this._fgPetList = [];
         this._pList = [[150,115],[815,115],[150,410],[815,410]];
         this._petMCList = [];
         this._lvlExpList = [0,404,867,1391,1996,2691,3476,4283,5210,6257,6560,7164,8042,8999,9905,11222,12657,13866,15621,17535,18067,19131,20274,21497,23092,24806,26640,28767,31053,33498,34163,35492,36900,38388,40382,42494,44726,47384,50201,53177,53975,55569,57243,58997,61388,63899,66530,69719,73067,76574,77504,2480,4960,7440,11266,15090,18916,24160,29404,34648,37216];
         this._pointList = [new Point(370,228),new Point(595,228),new Point(342,323),new Point(635,324)];
         super();
      }
      
      public static function getInstance() : com.robot.app.mapProcess.control.GroupGhaziTowerCtrl
      {
         if(gpGhaziTowerCtrl == null)
         {
            gpGhaziTowerCtrl = new com.robot.app.mapProcess.control.GroupGhaziTowerCtrl();
         }
         return gpGhaziTowerCtrl;
      }
      
      public function get map() : BaseMapProcess
      {
         return this._map;
      }
      
      public function set map(param1:BaseMapProcess) : void
      {
         this._map = param1;
      }
      
      public function setup() : void
      {
         PetFightModel.mode = PetFightModel.MULTI_MODE;
         PetFightModel.status = PetFightModel.FIGHT_WITH_BOSS;
         SocketConnection.addCmdListener(CommandID.GP_GHAZI_PET_LIST,this.onGetPetList);
         SocketConnection.addCmdListener(CommandID.GROUP_FT_OVER,this.onFtOver);
         SocketConnection.addCmdListener(CommandID.GP_GHAZI_GET_EXP,this.onGetExp);
      }
      
      public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.GP_GHAZI_PET_LIST,this.onGetPetList);
         SocketConnection.removeCmdListener(CommandID.GROUP_FT_OVER,this.onFtOver);
      }
      
      private function onGetPetList(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _arg = _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedByte();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         this._fgPetList = [];
         var _loc6_:uint = 0;
         while(_loc6_ < _loc5_)
         {
            this._fgPetList.push(_loc2_.readUnsignedInt());
            _loc6_++;
         }
         this._level = _loc3_ + 1;
         this._isBossLv = Boolean(_loc4_);
      }
      
      public function playFtStart() : void
      {
         var cnt:uint = 0;
         var id:uint = 0;
         var i:uint = 0;
         var name:String = null;
         var m:MovieClip = null;
         this.clearPetMC();
         if(this._level == 51 && _arg == 0 || this._level == 61 && _arg == 1)
         {
            DisplayUtil.removeForParent(this._map.animatorLevel["expMC"]);
            i = 0;
            while(i < 5)
            {
               name = "num_" + i;
               m = this._map.conLevel[name];
               m.gotoAndStop(1);
               i++;
            }
            this.getReward();
            SocketConnection.send(CommandID.GP_GHAZI_LEAVE);
            return;
         }
         this.addLevelMC();
         this.checkExpNum();
         cnt = 0;
         for each(id in this._fgPetList)
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(id),function(param1:DisplayObject):void
            {
               var _loc2_:MovieClip = param1 as MovieClip;
               if(Boolean(_map) && Boolean(_loc2_))
               {
                  _map.depthLevel.addChild(_loc2_);
                  if(_fgPetList.length == 1)
                  {
                     _loc2_.x = 480;
                     _loc2_.y = 165;
                  }
                  else
                  {
                     _loc2_.x = _pList[cnt][0];
                     _loc2_.y = _pList[cnt][1];
                  }
                  _loc2_.scaleX = 1.5;
                  _loc2_.scaleY = 1.5;
                  ++cnt;
                  _petMCList.push(_loc2_);
                  if(_petMCList.length == _fgPetList.length)
                  {
                     petWalkToFight();
                  }
               }
            },"pet");
         }
      }
      
      private function clearPetMC() : void
      {
         var _loc1_:MovieClip = null;
         while(this._petMCList.length > 0)
         {
            _loc1_ = this._petMCList.shift();
            DisplayUtil.removeForParent(_loc1_);
         }
      }
      
      private function addLevelMC() : void
      {
         var t:uint = 0;
         if(this._levelMC == null)
         {
            this._levelMC = MapManager.currentMap.libManager.getMovieClip("LevelMC");
         }
         this._levelMC.alpha = 1;
         this._levelMC.gotoAndStop(this._level);
         this._map.topLevel.addChild(this._levelMC);
         this._levelMC.x = 453;
         this._levelMC.y = 58;
         t = setTimeout(function():void
         {
            clearTimeout(t);
            TweenLite.to(_levelMC,3,{
               "alpha":0,
               "onComplete":onLvlMCCmp
            });
         },5000);
      }
      
      private function onLvlMCCmp() : void
      {
         DisplayUtil.removeForParent(this._levelMC);
      }
      
      private function checkExpNum() : void
      {
         var mc:MovieClip = null;
         var num:String = null;
         mc = this._map.animatorLevel["expMC"];
         mc.visible = true;
         this._map.animatorLevel.addChild(mc);
         if(_arg == 0)
         {
            num = String(this._lvlExpList[this._level - 1].toString());
         }
         if(_arg == 1)
         {
            num = String(this._lvlExpList[this._level].toString());
         }
         while(num.length < 5)
         {
            num = "0" + num;
         }
         AnimateManager.playMcAnimate(mc,0,"",function():void
         {
            var _loc2_:String = null;
            var _loc3_:MovieClip = null;
            var _loc4_:String = null;
            var _loc5_:uint = 0;
            mc.visible = false;
            var _loc1_:uint = 0;
            while(_loc1_ < 5)
            {
               _loc2_ = "num_" + _loc1_;
               _loc3_ = _map.conLevel[_loc2_];
               if((_loc4_ = num.charAt(_loc1_)) != "" && _loc4_ != null)
               {
                  _loc5_ = uint(_loc4_);
                  _loc3_.gotoAndStop(_loc5_ + 1);
               }
               else
               {
                  _loc3_.gotoAndStop(1);
               }
               _loc1_++;
            }
         });
      }
      
      private function petWalkToFight() : void
      {
         var _loc2_:MovieClip = null;
         if(this._petMCList.length == 1)
         {
            this.petWalkToPoint(this._petMCList[0],new Point(480,238));
            return;
         }
         var _loc1_:uint = 0;
         for each(_loc2_ in this._petMCList)
         {
            this.petWalkToPoint(_loc2_,this._pointList[_loc1_]);
            _loc1_++;
         }
      }
      
      private function petWalkToPoint(param1:MovieClip, param2:Point) : void
      {
         var _loc3_:String = String(Direction.getStr(new Point(param1.x,param1.y),param2));
         param1.gotoAndStop(_loc3_);
         TweenLite.to(param1,2,{
            "x":param2.x,
            "y":param2.y,
            "onComplete":this.onWalkCmp,
            "onCompleteParams":[param1]
         });
      }
      
      private function onWalkCmp(param1:MovieClip) : void
      {
         DisplayUtil.stopAllMovieClip(param1);
         param1.buttonMode = true;
         param1.addEventListener(MouseEvent.CLICK,this.onClickFight);
      }
      
      private function onClickFight(param1:MouseEvent) : void
      {
         SocketConnection.send(CommandID.GP_GHAZI_FT_START);
      }
      
      private function getReward() : void
      {
         var i:uint;
         var name:String = null;
         var boxMC:MovieClip = null;
         if(this._rewardBoxPanel == null)
         {
            this._rewardBoxPanel = MapManager.currentMap.libManager.getMovieClip("RewardBoxPanel");
         }
         LevelManager.appLevel.addChild(this._rewardBoxPanel);
         DisplayUtil.align(this._rewardBoxPanel,null,AlignType.MIDDLE_CENTER);
         i = 0;
         while(i < 3)
         {
            name = "box_" + i;
            boxMC = this._rewardBoxPanel[name];
            boxMC.gotoAndStop(1);
            boxMC.buttonMode = true;
            boxMC.addEventListener(MouseEvent.CLICK,this.onClickBox);
            i++;
         }
         this._rewardBoxPanel["closeBtn"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            DisplayUtil.removeForParent(_rewardBoxPanel);
         });
      }
      
      private function onClickBox(param1:MouseEvent) : void
      {
         this._curtBox = param1.currentTarget as MovieClip;
         SocketConnection.addCmdListener(CommandID.GP_GHAZI_FINl_RWD,this.onGetReward);
         SocketConnection.send(CommandID.GP_GHAZI_FINl_RWD);
      }
      
      private function onGetReward(param1:SocketEvent) : void
      {
         var _loc5_:String = null;
         var _loc6_:MovieClip = null;
         SocketConnection.removeCmdListener(CommandID.GP_GHAZI_FINl_RWD,this.onGetReward);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         this._curtBox.gotoAndStop(_loc3_ + 1);
         var _loc4_:uint = 0;
         while(_loc4_ < 3)
         {
            _loc5_ = "box_" + _loc4_;
            (_loc6_ = this._rewardBoxPanel[_loc5_]).buttonMode = false;
            _loc6_.mouseEnabled = false;
            _loc6_.removeEventListener(MouseEvent.CLICK,this.onClickBox);
            _loc4_++;
         }
      }
      
      private function onFtOver(param1:SocketEvent) : void
      {
         var _loc2_:GroupFightOverInfo = param1.data as GroupFightOverInfo;
         if(_loc2_.winnerID != 1)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         }
      }
      
      private function onAlarmClick(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         SocketConnection.send(CommandID.GP_GHAZI_LEAVE);
      }
      
      private function onGetExp(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GP_GHAZI_GET_EXP,this.onGetExp);
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._exp = _loc2_.readUnsignedInt();
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapCmp);
      }
      
      private function onMapCmp(param1:MapEvent) : void
      {
         var panel:MovieClip = null;
         var evt:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapCmp);
         if(MapManager.currentMap && MapManager.currentMap.id == 431 && Boolean(this._exp))
         {
            panel = MapManager.currentMap.libManager.getMovieClip("Gp_Ghazi_Panel");
            LevelManager.appLevel.addChild(panel);
            DisplayUtil.align(panel,null,AlignType.MIDDLE_CENTER);
            panel["closeBtn"].addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
            {
               DisplayUtil.removeForParent(panel);
            });
            panel["lvlTxt"].htmlText = "最终通过<font color=\'#ffff00\'>" + (this._level - 1) + "</font>轮！";
            panel["expTxt"].htmlText = "获得积累经验：<font color=\'#ffff00\'>" + this._exp + "</font>";
         }
      }
   }
}
