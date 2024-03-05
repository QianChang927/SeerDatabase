package com.robot.core
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.manager.MapManager;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundTransform;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.utils.Timer;
   import org.taomee.ds.HashMap;
   
   public class SoundManager
   {
      
      public static var isPlay_b:Boolean = true;
      
      private static var _currentSound:Sound;
      
      private static var _soundChannel:SoundChannel;
      
      private static var _oldId:String = "";
      
      private static var _soundUrl:String = "";
      
      private static var _position:uint;
      
      private static var _timer:Timer;
      
      private static var callBack:Function;
      
      private static var gameSoundInfo:HashMap;
      
      private static var _loading:Boolean = false;
       
      
      public function SoundManager()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         var urlLoader:URLLoader = null;
         var onLoadXMLComplete:Function = null;
         var func:Function = param1;
         onLoadXMLComplete = function(param1:Event):void
         {
            var _loc4_:XML = null;
            var _loc2_:XML = XML(param1.target.data);
            var _loc3_:XMLList = _loc2_.sound;
            gameSoundInfo = new HashMap();
            for each(_loc4_ in _loc3_)
            {
               gameSoundInfo.add(String(_loc4_.@gameName),_loc4_);
            }
            urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
            urlLoader = null;
            func.call();
         };
         urlLoader = new URLLoader();
         urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/gameBackgroundSound.xml")));
      }
      
      public static function playGameSound(param1:String) : void
      {
         var initGameSound:Function = null;
         var gameName:String = param1;
         initGameSound = function():void
         {
            var soundId:String;
            if(_timer != null)
            {
               _timer.removeEventListener(TimerEvent.TIMER,onVolumeDown);
               _timer.stop();
               _timer = null;
            }
            if(!SoundManager.getIsPlay)
            {
               return;
            }
            soundId = XML(gameSoundInfo.getValue(gameName)).@soundName;
            if(soundId == "")
            {
               return;
            }
            if(_oldId == "")
            {
               _oldId = soundId;
               _soundUrl = ClientConfig.getMapSound(_oldId);
               stopSound();
               _position = 0;
               playing();
            }
            else if(soundId != _oldId)
            {
               _oldId = soundId;
               _soundUrl = ClientConfig.getMapSound(_oldId);
               stopSound(function():void
               {
                  _position = 0;
                  playing();
               });
            }
            else if(!_currentSound)
            {
               _position = 0;
               playing();
            }
         };
         if(gameSoundInfo == null)
         {
            setup(initGameSound);
         }
         else
         {
            initGameSound();
         }
      }
      
      public static function playSoundById(param1:String = "") : void
      {
         var soundId:String;
         var tr:SoundTransform = null;
         var sid:String = param1;
         if(_timer != null)
         {
            _timer.removeEventListener(TimerEvent.TIMER,onVolumeDown);
            _timer.stop();
            _timer = null;
         }
         if(!MapManager.currentMap)
         {
            return;
         }
         if(!SoundManager.getIsPlay)
         {
            return;
         }
         soundId = sid;
         if(soundId == "")
         {
            _oldId = "";
            stopSound();
            try
            {
               tr = new SoundTransform(0.2);
               _soundChannel = MapManager.currentMap.libManager.getSound("sound").play(0,999,tr);
            }
            catch(e:Error)
            {
            }
         }
         else if(_oldId == "")
         {
            _oldId = soundId;
            _soundUrl = ClientConfig.getMapSound(_oldId);
            stopSound();
            _position = 0;
            playing();
         }
         else if(soundId != _oldId)
         {
            _oldId = soundId;
            _soundUrl = ClientConfig.getMapSound(_oldId);
            stopSound(function():void
            {
               _position = 0;
               playing();
            });
         }
         else if(!_currentSound)
         {
            _position = 0;
            playing();
         }
      }
      
      public static function playSound() : void
      {
         var mapId:uint;
         var soundId:String;
         var tr:SoundTransform = null;
         if(_timer != null)
         {
            _timer.removeEventListener(TimerEvent.TIMER,onVolumeDown);
            _timer.stop();
            _timer = null;
         }
         if(!MapManager.currentMap)
         {
            return;
         }
         if(!SoundManager.getIsPlay)
         {
            return;
         }
         mapId = MapManager.currentMap.id;
         soundId = MapXMLInfo.getBgSoundIdByMapId(MapManager.getResMapID(mapId));
         if(soundId == "")
         {
            _oldId = "";
            stopSound();
            try
            {
               tr = new SoundTransform(0.2);
               _soundChannel = MapManager.currentMap.libManager.getSound("sound").play(0,999,tr);
            }
            catch(e:Error)
            {
            }
         }
         else if(_oldId == "")
         {
            _oldId = soundId;
            _soundUrl = ClientConfig.getMapSound(_oldId);
            stopSound();
            _position = 0;
            playing();
         }
         else if(soundId != _oldId)
         {
            _oldId = soundId;
            _soundUrl = ClientConfig.getMapSound(_oldId);
            stopSound(function():void
            {
               _position = 0;
               playing();
            });
         }
         else if(!_currentSound)
         {
            _position = 0;
            playing();
         }
      }
      
      private static function playing() : void
      {
         _currentSound = new Sound();
         _currentSound.addEventListener(Event.COMPLETE,onSoundComHandler);
         _currentSound.load(new URLRequest(_soundUrl));
         _loading = true;
      }
      
      private static function onSoundComHandler(param1:Event) : void
      {
         _loading = false;
         _currentSound.removeEventListener(Event.COMPLETE,onSoundComHandler);
         _soundChannel = _currentSound.play(_position,99999);
      }
      
      public static function stopSoundImmediately() : void
      {
         if(_timer != null)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onVolumeDown);
            _timer = null;
         }
         if(_soundChannel)
         {
            _position = _soundChannel.position;
            _soundChannel.stop();
         }
         if(_currentSound)
         {
            if(_loading)
            {
               try
               {
                  _currentSound.close();
               }
               catch(e:Error)
               {
               }
            }
            _currentSound.removeEventListener(Event.COMPLETE,onSoundComHandler);
            _currentSound = null;
         }
      }
      
      public static function stopSound(param1:Function = null) : void
      {
         if(_timer != null)
         {
            return;
         }
         if(_soundChannel)
         {
            _position = _soundChannel.position;
            callBack = param1;
            _timer = new Timer(30);
            _timer.addEventListener(TimerEvent.TIMER,onVolumeDown);
            _timer.start();
         }
         if(_currentSound)
         {
            if(_loading)
            {
               try
               {
                  _currentSound.close();
               }
               catch(e:Error)
               {
               }
            }
            _currentSound.removeEventListener(Event.COMPLETE,onSoundComHandler);
            _currentSound = null;
         }
      }
      
      private static function onVolumeDown(param1:Event) : void
      {
         var _loc2_:SoundTransform = _soundChannel.soundTransform;
         _loc2_.volume -= 0.03;
         _soundChannel.soundTransform = _loc2_;
         if(_soundChannel.soundTransform.volume <= 0)
         {
            if(_timer)
            {
               _timer.stop();
               _timer.removeEventListener(TimerEvent.TIMER,onVolumeDown);
               _timer = null;
            }
            _soundChannel.stop();
            if(callBack != null)
            {
               callBack();
               callBack = null;
            }
         }
      }
      
      public static function set setIsPlay(param1:Boolean) : void
      {
         isPlay_b = param1;
      }
      
      public static function get getIsPlay() : Boolean
      {
         return isPlay_b;
      }
   }
}
